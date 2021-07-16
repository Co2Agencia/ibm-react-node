import express from "express"

const app = express()
const port = 8000

app.get('/test/:str', (req, res)=>{
    const string = req.params.str
    let json_data = {
        id:1,
        data:string
    }

    json_data = JSON.stringify(json_data)

    res.send(json_data)
})


app.post('/persona/:id', (req, res)=>{
    let persona_id = req.params.id
    let personas = {
        1: "Pepe",
        2: "Romina", 
        3: "Carla",
        4: "Javier"
    }

    let persona = personas[persona_id]

    if(persona) res.send(persona)
    else res.send("No se encontro persona con id #"+persona_id)
})

let server = app.listen(port, ()=>{
    console.log(`Escuchando en URL http://localhost:${port}`);
})
