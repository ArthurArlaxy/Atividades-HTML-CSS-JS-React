import pg from "pg"

// Connection String: protocolo://usuario:senha@host:porta/nome_do_banco
const db = new pg.Client({
    connectionString: `postgresql://arlaxy:Arthur1801@localhost:5432/node_postgres`
})


// Forma errado pois pode gerar brecha para injesão de SQL
async function insertPokemonWrong(name, type) {
    await db.connect()

    const query = `
    INSERT INTO "public"."pokemon" (name,type) VALUES (${name}, ${type});
    `

    const result = await db.query(query)
    console.log(result)

    await db.end()
}

async function insertPokemon(name, type) {
    await db.connect()

    const query = `
    INSERT INTO "public"."pokemon" (name,type) VALUES ($1, $2)
    `

    const result = await db.query(query,[name,type])
    console.log(result)

    await db.end()
}

insertPokemon('Charmander', 'fire')