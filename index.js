const express = require("express")
const cors = require("cors")

const gamesList = [
    {
        id: 1,
        name: "League of Legends"
    },
    {
        id: 2,
        name: "Rocket League"
    },
    {
        id: 3,
        name: "Fornite"
    },
    {
        id: 4,
        name: "Minecraft"
    }
]

const app = express()
app.use(express.json())
app.use(cors());

app.get("/",(request,response)=>{
    response.status(200).send("<p>Hola<p>")
})

app.get("/api/games", (request,response)=>{
    response.status(202).json(gamesList)
})

app.get("/api/games/:id",(request,response)=>{
    const id = Number(request.params.id)
    const result = gamesList.find((game)=>game.id === id)

    if(result){
        response.status(202).json(result)
    }
    else{
        response.status(404).end()
    }
})

app.delete("/api/games/:id",(request,response)=>{
    const {id} = Number(request.params.id)
    gamesList.pop(gamesList.id === id)
    response.status(202).json(gamesList)
})

app.post("/api/games",(request,response)=>{

    const ids = gamesList.map(maximo => maximo.id)

    const max = Math.max(...ids)

    const newGame = {
        id: max + 1,
        name: request.body.name 
    }

    gamesList.push(newGame)

    response.status(201).json(gamesList)

})

const PORT = 3001

app.listen(PORT, ()=>{
    console.log("Server Running on port: " + PORT)
})