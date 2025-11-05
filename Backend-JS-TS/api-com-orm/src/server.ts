import express from "express";
import { router as usersRouter } from "./routes/users";

const app = express()

app.use(express.json())
app.use("/api/users", usersRouter)


app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado em http://localhost${process.env.PORT}`)
})