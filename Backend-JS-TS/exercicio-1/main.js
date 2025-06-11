import { createFile,deleteFile,showFile,updateFile} from "./functions.js"

createFile("Olá mundo! Acabei de ser criado")
showFile()
updateFile("Hello world! I'm brazilian")
showFile()
deleteFile()