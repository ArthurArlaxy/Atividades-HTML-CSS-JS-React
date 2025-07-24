const { request } = require("express")

const games = [
    { id: 1, name: 'Legend of Mana', genres: ['action-rpg'], year: 1999 },
    { id: 2, name: 'World of Warcraft', genres: ['mmorpg'], year: 2004 },
    { id: 3, name: 'Metal Gear Solid', genres: ['stealth', 'action-adventure'], year: 1998 },
    { id: 4, name: 'Sonic Adventure 2', genres: ['platformer'], year: 2001 },
    { id: 5, name: 'Age of Empires 2', genres: ['real-time-strategy'], year: 1999 }
]

function findGame(id){
    const gameIndex = games.findIndex(game => game.id === +id)
    return games[gameIndex]
}

module.exports = {
    //GET /games
    index: (req, res) => {
        res.json(games)
    },
    //POST /games
    create: (req, res) => {
        const { name, genres, year } = req.body

        if (!name || !genres || !year) {
            return res.status(400).json({ message: "Erro ao criar o jogo!" })
        }

        const game = {
            id: Math.floor(Math.random() * 999999),
            name,
            genres,
            year,
        }
        games.push(game)

        res.status(201).json(game)
    },
    // GET /games/:id
    show: (req, res) => {
        const { id } = req.params
        const game = findGame(id)

        if (!game){
            return res.status(404).json({ message:"Game not found" })
        }

        res.json(game)
    },
    // POST /games/:id/genres
    newGenre: (req,res) =>{
        const { id } = req.params
        const { genres } = req.body

        const game = findGame(id)

        if (!game){
            return res.status(404).json({ message:"Game not found" })
        }

        if (!genres || game.genres.includes(genres)){
            return  res.status(400).json({ message: "Error in genre"})
        }

        game.genres.push(genres)

        res.status(201).json(game)
    },
    //PUT /games/:id
    update: (req, res) => {
        const { id } = req.params
        const { name, year} = req.body

        const game = findGame(id)

        if (!game){
            return res.status(404).json({ message:"Game not found" })
        }

        if (typeof name === 'string'){
            game.name = name
        }

        
        if (typeof year === 'number'){
            game.year = year
        }

        res.status(200).json(game)
    },
    //DELETE /games/:id
    delete: (req, res) => {
        const { id } = req.params

        const gameIndex = games.findIndex(game => game.id === +id)

        if(gameIndex === -1){
            return res.status(404).json({ message:"Game not found" })
        }
        games.splice(gameIndex,1)

        res.status(204).end()
    },
    //DELETE /games/:id/genres/:name
    deleteGenre: (req,res) => {
        const { id, name } = req.params

        const game = findGame(id)
        
        if (!game){
            return res.status(404).json({ message:"Game not found" })
        }

        if (!name || !game.genres.includes(name)){
            return  res.status(400).json({ message: "Error in genre"})
        }

        game.genres = game.genres.filter(genre => genre !== name)

        res.status(200).json(game)
    }
}