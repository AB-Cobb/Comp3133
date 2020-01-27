const {fork} = require('child_process');

const child = fork('child_process')

child.send("gotime")
console.log("doing stuff while child computes")

