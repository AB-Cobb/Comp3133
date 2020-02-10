const fs = require ('fs')
const path = require ('path')
const logpath = path.join(__dirname, 'logs')

function removeLogs(){
    return new Promise ((resolve, reject) =>{
        try {
            fs.readdir(logpath, (err, files) => {
                if (err) throw err;
            
                files.forEach(file => {
                    console.log("deleting " + file )
                    fs.unlink(path.join(logpath, file), err => {
                        if (err) throw err;
                    });
                })
            });
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
                fs.mkdir(logs)
            }
            process.chdir('logs');
            for (let i = 0; i < 10; i++){
                fs.writeFile("log_" + i, "first log\n", function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("log_" + i + " created");
                });
                for (let j = 0; j < i; j++){
                    fs.appendFile("log_" + i, "new log\n", function(err) {
                        if(err) {
                            return console.log(err);
                        }
                    });
                }
            }
            resolve();
        } catch (err) {
            reject(err);
        }
    })
}
removeLogs().then(()=> createLogs());