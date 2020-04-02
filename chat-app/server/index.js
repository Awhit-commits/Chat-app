//Setting up dependences required for backend
//Socketio for real-time data since it's quicker than http

const express = require('express');
const socketio = require('socket.io');
const http = require('http');
//Setting up Port for deployment later
//TODO:Comeback when I have server to deploy on
const PORT = process.env.PORT || 5000;
const {addUser,getUser,removeUser,getUserRoom}= require('./Users.js')
// importing the router.js file
const router = require('./router')

const app =express();
const server = http.createServer(app);
const io = socketio(server);

//Socket io implementation for the backend

io.on('connect',(socket)=>{
    socket.on('join',({name,room},callback)=>{
        console.log({name,room})
        const {error,user} = addUser({id:socket.id,name,room});
        //error handling
        if (error) return callback(error);
        socket.join(user.room)
        //If no error user will join room
        //Welcoming user to room
        socket.emit('message',{user:'admin',text:`${user.name}, welcome to the room ${user.room}`});

        //Notifying user has joined the room
        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name}, has joined!`})
        // io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });        
        callback();

    });
    //creating instance of message by specific user when it's sent
    socket.on('sendMessage',(message,callback)=>{
        const user = getUser(socket.id)

        io.to(user.room).emit('message',{user:user.name,text:message});

        callback();

    });
    console.log(`We have a new connection!!!`)
    socket.on('disconnect',()=>{
        console.log(`User has disconnected`)
    })
    
})

// Use to render what's on the page
app.use(router);

// Setting up server and a sanity message 
server.listen(PORT,()=> console.log(`Server has started on port ${PORT}`))
