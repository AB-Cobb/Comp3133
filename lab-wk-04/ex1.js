const fs = require ('fs')
const path = require ('path')
const filepath = path.join(__dirname, 'my_folder')

fs.readdir(filepath, function(err, items) {
    if (!err){
        items.forEach(file => {
            console.log("Found File: " + file)
        });
    } else {
        console.log(err)
    }
});