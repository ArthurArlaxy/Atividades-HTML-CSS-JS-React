import { defineConfig } from "prisma/config"
import { env } from "process"

export default defineConfig({
    schema: "prisma/schema.prisma",

    migrations: {
        path: "prisma/migrations",
    },

    datasource: {
        // A URL que antes ficava no schema
        // Agora DEVE ficar aqui
        url: env.DATABASE_URL
    },

    engine: "classic"
})
