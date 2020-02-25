const fs = require ('fs')
const path = require ('path')
const logpath = path.join(__dirname, 'logs')

function removeLogs(){
    return new Promise ((resolve, reject) =>{
        try {
            if (fs.existsSync(logpath)){
                fs.readdirSync(logpath, (err, files) => {
                    if (err) throw err;
                
                    files.forEach(file => {
                        console.log("deleting " + file )
                        fs.unlinkSync(path.join(logpath, file), err => {
                            if (err) throw err;
                        });
                    })
                    fs.rmdirSync("logs")
                })
                
            }
            resolve();
        } catch (err) {
            reject(err)
        }
    })
}

function createLogs(){
    return new Promise ((resolve, reject) =>{
        try {
            if (! fs.existsSync(logpath)) {
                fs.mkdirSync("logs")
            }
            process.chdir('logs');
            for (let i = 0; i < 10; i++){
                fs.writeFileSync("log_" + i, "first log\n", function(err) {
                    if(err) {
                        throw err;
                    }
                    console.log("created log_" + i);
                });
                for (let j = 0; j < i; j++){
                    fs.appendFileSync("log_" + i, "new log\n", function(err) {
                        if(err) {
                            throw err;
                        }
                    });
                }
            }
            fs.fsync
            resolve();
        } catch (err) {
            reject(err);
        }
    })
}
removeLogs().then( result => createLogs());