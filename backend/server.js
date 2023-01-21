const express = require("express")
const app = express()
const http = require("http")
const {Server} = require("socket.io")
const cors = require("cors")

app.use(cors())

const server = http.createServer(app)




const io = new Server(server,
    {
        cors: {
            origin: ["http://localhost:3000"],
        }
    })

server.listen(3001, ()=> {
    console.log("server running")
})
io.on('connection', socket => {
    console.log(socket.id)
    
    socket.on("send_message", (data) => {
        console.log(data)
        socket.broadcast.emit("receive_message", data)
        for (let i = 0; i < 300; i++) {
            socket.broadcast.emit("receive_n", {n: Math.random()})

        }
    })




})