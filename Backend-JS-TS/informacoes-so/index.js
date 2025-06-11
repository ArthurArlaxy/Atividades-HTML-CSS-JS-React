const os = require("node:os")

const platform = os.platform()
console.log("Plataforma Do SO:", platform)

const arch = os.arch()
console.log(`Arquiterur do SO: ${arch}`)

const CPU = os.cpus()
console.log(`Informações da CPU: `, CPU[0])

const memory = os.totalmem()
console.log("Total de memória do PC:", Math.round(memory / 1024 / 1024 / 1024), "GB")

const freeMemory = os.freemem()
console.log(`Total de memória disponivel: ${Math.round(freeMemory /1024 / 1024 / 1024)}GB`)