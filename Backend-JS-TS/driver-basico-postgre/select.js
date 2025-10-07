import pg from "pg"

// Connection String: protocolo://usuario:senha@host:porta/nome_do_banco
const db = new pg.Client({
    connectionString: `postgresql://arlaxy:Arthur1801@localhost:5432/node_postgres`
})


async function insertPokemon(name, type) {
    await db.connect()

    const query = `
    SELECT * FROM "public"."pokemon"
    `

    const result = await db.query(query)
    result.rows.forEach(pokemon => console.log(`${pokemon.name} - ${pokemon.type}`))

    await db.end()
}

insertPokemon('Charmander', 'fire')