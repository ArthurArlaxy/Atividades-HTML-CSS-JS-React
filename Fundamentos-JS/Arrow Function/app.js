const games = ["Sonic", "Mario", "Fortnite", "Fifa 24", "Fifa 23", "Rainbow Six"]

const gamesWithA = games.filter(game => game.includes("a"))

console.log(gamesWithA)

const game = games.every(parent => parent[0] === "R")

console.log(game)

