setInterval(()=> console.log("tick"), 1000)

process.on("SIGINT", () => console.log("process uptime on signal interupt ",process.uptime()))
process.on("exit", ()=> console.log("process uptime on exit ",process.uptime()))