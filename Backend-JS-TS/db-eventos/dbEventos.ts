import pg from "pg"

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
    newEvent("Arthur programmer", "2025-10-06", 200, 199)
    console.log(await createTableEvent())
    console.log(await getEvents())
    console.log(await getEventByName("Jorge e matheus"))
    console.log(await getEventsByDate("2025-10-09"))
    console.log(await ticketSales("Arthur programmer"))
}

main()
