const os = require("node:os")
const fs = require("node:fs")
const path = require("node:path")

function formatUptime(seconds) {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

const systemPlataformMap = {
    "win32" : "Windows",
    "linux" : "Linux",
    "darwin": "MacOS",
    "freebsd": "FreeBSD"
}

function machineInfo(){
    const nameSO = systemPlataformMap[os.platform()]
    const arch = os.arch()
    const arrayCPU = os.cpus()
    const CPUModel = arrayCPU[0]["model"]
    const timeON = formatUptime(os.uptime());
    const memoryInUse = Math.round(100*((os.totalmem() - os.freemem()) / os.totalmem()))

    return {nameSO, arch, CPUModel,timeON, memoryInUse}
}

const pathDirLog = path.resolve(__dirname,"log")
if (!fs.existsSync(pathDirLog)) {
    fs.mkdirSync(pathDirLog);
}

const pathFileLog = path.resolve(pathDirLog,"log.txt")

function printLog({nameSO, arch, CPUModel,timeON, memoryInUse}){
    console.clear()
    console.log(`Nome do SO: ${nameSO}`)
    console.log(`Aquitetura do PC: ${arch}`)
    console.log(`Modelo da CPU: ${CPUModel}`)
    console.log(`Tempo ligado: ${timeON}`) 
    console.log(`Memoria em uso: ${memoryInUse}%`)
}


function logWrite({nameSO, arch, CPUModel,timeON, memoryInUse}){
    const now  = new Date().toLocaleString("pt-BR")

    const logText = `
    Time: ${now}
    Nome do SO: ${nameSO}
    Aquitetura do PC: ${arch}
    Modelo da CPU: ${CPUModel}
    Tempo ligado: ${timeON}
    Memoria em uso: ${memoryInUse}%\n\n`

        fs.appendFile(pathFileLog,logText,(error) => {
            if (error) {
                console.log(`Ocorreu um erro, nesta análise!!!`)
            }
        })
}

module.exports = {logWrite,printLog, machineInfo}