import express from "express";
import { router as usersRouter } from "./routes/users";
import { router as postsRouter } from "./routes/posts";
import { router as tagsRouter } from "./routes/tags";

const app = express()

app.use(express.json())
app.use("/api/users", usersRouter)
app.use("/api/posts", postsRouter)
app.use("/api/tags", tagsRouter)

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado em http://localhost${process.env.PORT}`)
})