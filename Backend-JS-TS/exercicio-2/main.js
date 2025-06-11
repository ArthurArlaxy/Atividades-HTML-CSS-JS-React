const {machineInfo, logWrite, printLog} = require("./functions.js")

setInterval(() => {
    const data = machineInfo()
    printLog(data)
    logWrite(data)
},1000)

