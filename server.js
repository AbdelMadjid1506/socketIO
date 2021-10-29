const app = require('express')();
const http= require('http').Server(app);
const io= require('socket.io')(http);



app.get('/', function(req,res){
    res.sendFile(__dirname+ '/index.html');
})



io.on('connection', function(socket){
    console.log("a user is connected");
    socket.on('disconnect', function(){
        console.log("a user is disconnect");
    })
 
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
        
    });
})

http.listen('5000', function(){
    console.log("Server running on 5000");
})