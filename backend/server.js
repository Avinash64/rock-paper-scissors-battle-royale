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
        // if(game[players[0]]["choice"] == game[players[1]]["choice"]){
        // game = {}
        // return "Tie"
        // }
        // if(game[players[0]]["choice"] == game[players[1]]["choice"]){
        //     game = {}
        //     return "Tie"
        //     }
        // if(game[players[0]]["choice"] == "r" && game[players[1]]["choice"] == "s"){
        //     game = {}
        //     return "Tie"
        //     }
        // game = {}
        
        // return "Game over"
            const player1 = game[players[0]]
            const player2 = game[players[1]]
            if (player1["choice"] == player2["choice"]) {
                game = {}
                return "Tie"
            }
            if (player1["choice"] == 's' && player2["choice"] == 'r') {
                game = {}
                return `${player2.name} played rock and beat ${player1.name}`
            }
            if (player1["choice"] == 's' && player2["choice"] == 'p') {
                game = {}
                return `${player1.name} played scissors and beat ${player2.name}`
            }
            if (player1["choice"] == 'r' && player2["choice"] == 'p') {
                game = {}
                return `${player2.name} played paper and beat ${player1.name}`
            }
            if (player1["choice"] == 'r' && player2["choice"] == 's') {
                game = {}
                return `${player1.name} played rock and beat ${player2.name}`
            }
            if (player1["choice"] == 'p' && player2["choice"] == 's') {
                game = {}
                return `${player2.name} played scissors and beat ${player1.name}`
            }
            if (player1["choice"] == 'p' && player2["choice"] == 'r') {
                game = {}
                return `${player1.name} played paper and beat ${player2.name}`
            }
        
        
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

var clients = [];

io.on('connection', socket => {
    console.log(socket.id)
    clients.push(socket);

    
    socket.on("send_message", (data) => {
        console.log(data)
        socket.broadcast.emit("receive_message", data)
    })

    socket.on("play", (data) => {
        console.log(data)
        game[data.name] = data
        result = gameOver(data.name)
        console.log(result)
        for (var i in clients) {
            clients[i].emit("result", result);
        }
    })



})