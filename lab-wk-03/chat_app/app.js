const express = require ('express')
const app = express()

app.set ('view engine', 'ejs')

app.use (express.static('public'))

//Routing
app.get ('/', (req, res) => {
    //res.send('Hello Internet!')
    res.render('index')
})

//PORTS
server = app.listen(3000)

//Socket
const chat_io = require("socket.io")(server)

messages = [];

//listen to everything
chat_io.on('connection', (socket) => {
    console.log('New user connected')
    for (message in messages){
        console.log(message)
        socket.emit ("new_message",
            {message : messages[message].message, username : messages[message].username})
    }
    //defalt name
    socket.username = "Anonymouse"

    //listen to change name
    socket.on ("change_username", (data) => {
        console.log(data.username)
        socket.username = data.username;
    })

    //listen to new message
    socket.on("new_message", (data) => {
        message = {message : data.message, username : socket.username};
        messages.push(message);
        //console.log(messages)
        chat_io.sockets.emit ("new_message", message);
    })
})