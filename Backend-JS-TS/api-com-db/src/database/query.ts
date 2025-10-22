import { Pool } from "pg"

const pool = new Pool({
    connectionString:"postgres://arlaxy:Arthur1801@localhost:5432/node_postgres" 
})

export async function query(queryString: string, params?: any) {
    return pool.query(queryString, params)
}

export async function client(){
    return pool.connect()
}