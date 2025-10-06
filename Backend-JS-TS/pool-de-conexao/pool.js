import pg from "pg"

const pool = new pg.Pool({
    connectionString: "postgresql://arlaxy:Arthur1801@localhost:5432/node_postgres",
    max:2
})

async function openConnection() {
    const client = await pool.connect() 

    const result = await client.query("SELECT 1+1 AS resultado;")
    console.log(result.rows)

    setTimeout(()=> {
        client.release()
        console.log("fechando conexão....")
    },5000)
}

openConnection()
openConnection()
openConnection()