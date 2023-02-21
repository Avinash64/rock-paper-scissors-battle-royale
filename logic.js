if (game[players[0]]["choice"] == game[players[1]]["choice"]) {
    game = {}
    return "Tie"
}

let game = {
    players: [
        { "name": "bruh1", choice: "s" },

        { "name": "bruh2", choice: "p" },
    ]
}
function game_logic(game) {
    const player1 = game[players[0]]
    const player2 = game[players[1]]
    if (player1["choice"] == player2["choice"]) {
        game = {}
        return "Tie"
    }
    if (player1["choice"] == 's' && player2["choice"] == 'r') {
        game = {}
        return `${player2.name} beat ${player1.name}`
    }
    if (player1["choice"] == 's' && player2["choice"] == 'p') {
        game = {}
        return `${player1.name} beat ${player2.name}`
    }
    if (player1["choice"] == 'r' && player2["choice"] == 'p') {
        game = {}
        return `${player2.name} beat ${player1.name}`
    }
    if (player1["choice"] == 'r' && player2["choice"] == 's') {
        game = {}
        return `${player1.name} beat ${player2.name}`
    }
    if (player1["choice"] == 'p' && player2["choice"] == 's') {
        game = {}
        return `${player2.name} beat ${player1.name}`
    }
    if (player1["choice"] == 'p' && player2["choice"] == 'r') {
        game = {}
        return `${player1.name} beat ${player2.name}`
    }

}