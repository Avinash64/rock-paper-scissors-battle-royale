const express = require("express")
const app = express()
const http = require("http")
const {Server} = require("socket.io")
const cors = require("cors")

app.use(cors())

const server = http.createServer(app)



let game = {}



function gameOver(name) {
    var players = Object.keys(game)
    if (players.length == 2){
        if(game[players[0]]["choice"] == game[players[1]]["choice"]){
        game = {}
        return "Tie"
        }
        if(game[players[0]]["choice"] == game[players[1]]["choice"]){
            game = {}
            return "Tie"
            }
        if(game[players[0]]["choice"] == "r" && game[players[1]]["choice"] == "s"){
            game = {}
            return "Tie"
            }
        game = {}
        
        return "Game over"
    }
    return "waiting"
}

const io = new Server(server,
    {
        cors: {
            origin: '*',
            // methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
            // credentials: false
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
    })

    socket.on("play", (data) => {
        console.log(data)
        game[data.name] = data
        console.log(gameOver(data.name))
        socket.broadcast.emit("receive_message", data)
    })



})