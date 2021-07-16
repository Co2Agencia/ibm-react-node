const express = require("express")

const app = express()
const port = 8000

app.get("", (req, res)=>{
    res.status(200).send("Todo Ok!")
})

/* MiddleWare analiza el id que se pase */
app.use("/user/:id", (req, res, next)=>{
    let id = req.params.id

    if (id == 1 || id == 3) throw new Error("No estas autorizado para entrar con esta cuenta")
    else next()
})

app.use((error, req, res, next) =>{
    if (error != null) res.status(401).send(error.toString())
    else next()
})

app.get("/user/:id", (req, res)=>{
    let id = req.params.id

    return res.send(`Usuario ${id} ingresado con éxito!`)
})

app.listen(port, ()=>{
    console.log(`Servidor escuchando en puerto ${port}`)
})