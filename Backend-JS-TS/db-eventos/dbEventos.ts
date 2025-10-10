import pg from "pg"
import readline from "node:readline"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function pergunta(text: string) {
    return new Promise((answer) => {
        rl.question(text, answer)
    })
}

interface EventInterface {
    id: number,
    name: string,
    date: string
    total_tickets: number
    sold_tickets: number
}

const pool = new pg.Pool({
    connectionString: "postgresql://arlaxy:Arthur1801@localhost:5432/node_postgres",
    max: 2
})

async function createTableEvent() {
    const client = await pool.connect()

    await client.query(`
        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            name  VARCHAR(200) NOT NULL,
            date  DATE NOT NULL,
            total_tickets INT NOT NULL,
            sold_tickets INT NOT NULL
        )
        `)

    client.release()
    return "A tabela foi criada com sucesso"
}
async function newEvent(name: string, date: string, total_tickets: number, sold_tickets: number) {
    const client = await pool.connect()
    const response = await client.query(`
        INSERT INTO events (name, date, total_tickets, sold_tickets) VALUES  ($1, $2, $3, $4) RETURNING *
        `, [name, date, total_tickets, sold_tickets])

    client.release()
    return response.rows
}
async function getEvents() {
    const client = await pool.connect()
    const response = await client.query(`
        SELECT * FROM events
        `)

    client.release()
    return response.rows
}

async function getEventByName(name: string) {
    const client = await pool.connect()
    const response = await client.query(`
        SELECT * FROM events where name = $1
        `, [name])

    client.release()
    return response.rows[0]
}

async function getEventsByDate(date: string) {
    const client = await pool.connect()
    const response = await client.query(`
        SELECT * FROM events where date = $1
        `, [date])

    client.release()
    return response.rows
}

async function ticketSales(nameOfEvent: string) {
    const client = await pool.connect()

    const event: EventInterface = await getEventByName(nameOfEvent)

    const eventDate = new Date(event.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Remove a hora para comparar apenas a data

    if (eventDate < today) {
        return "O evento já passou"
    }

    if (event.sold_tickets >= event.total_tickets) {
        return "Os ingressos já foram todos vendidos"
    }

    const response = await client.query(`
        UPDATE events SET sold_tickets = $1 where name = $2
        `, [++event.sold_tickets, nameOfEvent])

    client.release()
    return response.rows
}


async function main() {
    let option = 0
    let name = ""
    let date = ""
    let total_tickets = 0
    let sold_tickets = 0
    
    while (option !== 6) {
        console.log(`
            Que opção você deseja:

            1 - Ver todos os eventos 
            2 - Adicionar Eventos
            3 - Encontrar evento por nome
            4 - Encontrar eventos por data
            5 - Comprar um ingresso
            6 - Sair
        `)

        option = await Number(await pergunta(">>>>>>>"))

        switch (option) {
            case 1:
                console.log(await getEvents())
                break
            case 2:
                name = await String(await pergunta("Qual é o nome do evento?"))
                date = await String(await pergunta("Qual é o data do evento?"))
                total_tickets = await Number(await pergunta("Qual é o total de ingressos?"))
                sold_tickets = await Number(await pergunta("Quantos ingressos foram vendidos?"))
                console.log(await newEvent(name, date, total_tickets, sold_tickets))
                break
            case 3:
                name = await String(await pergunta("Qual é o nome do evento?"))
                console.log(await getEventByName(name))
                break
            case 4:
                date = await String(await pergunta("Qual é o data do evento?"))
                console.log(await getEventsByDate(date))
            case 5: 
                name = await String(await pergunta("Qual é o nome do evento?"))
                console.log(await ticketSales(name))
                break
            case 6: 
                console.log("Saindo ...")
                break
            default:
                console.log("Você digitou um opção invalida")
        }
    }
    process.exit()
}

main()