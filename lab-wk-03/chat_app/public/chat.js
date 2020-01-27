$(function(){
    var name = "Anonymouse"
    //make connection
    var socket = io.connect('http://localhost:3000')

    //buttons + inputs
    var message = $("#message")
    var username = $("#username")
    var send_message = $("#send_message")
    //var send_username = $("#send_username")
    var chatroom = $("#chatroom")
    /*
    //send username
    send_username.click(function(){
        console.log(username.val())
        socket.emit("change_username", {username : username.val()})

    })// */

    //send message
    send_message.click(function (){
        if (username.val() != name){
            socket.emit("change_username", {username : username.val()})
            name = username.val();
        }
        console.log(message.val())
        socket.emit('new_message', {message : message.val(), username : username.val()})
    })

    //receive message
    socket.on("new_message", (data) => {
        console.log(data)
        chatroom.append("<div class='message'><span>"+ data.username
            +":</span><p class='message_content'>"+ data.message +"</p></div>")
    })
});

    
