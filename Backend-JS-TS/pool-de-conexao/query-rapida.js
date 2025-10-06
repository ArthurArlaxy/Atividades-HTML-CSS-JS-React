import pg from "pg"

const pool = new pg.Pool({
    connectionString: "postgresql://arlaxy:Arthur1801@localhost:5432/node_postgres",
    max:2
})

async function queryRapida() {
    const result = await pool.query("SELECT 1+1 AS resultado;")
    console.log(result.rows[0])

    setTimeout(()=> {
        console.log("fechando conexão....")
    },5000)
}

queryRapida()
queryRapida()
queryRapida()