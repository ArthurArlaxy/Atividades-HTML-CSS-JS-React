import pg from "pg"

// Connection String: protocolo://usuario:senha@host:porta/nome_do_banco
const db = new pg.Client({
    connectionString: `postgresql://arlaxy:Arthur1801@localhost:5432/node_postgres`
})

async function createTable() {
    await db.connect()

    const query = `
    CREATE TABLE IF NOT EXISTS "public"."pokemon"(
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        type VARCHAR(200)
    );
    `

    const result = await db.query(query)
    console.log(result)

    await db.end()
}

createTable()