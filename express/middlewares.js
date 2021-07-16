import express from "express"

const app = express()
const port = 8000


// Middleware analiza el id que se pase
// Envia un error si el id es = 1
app.use('/user/:id', (req, res, next)=>{
    let id = req.params.id
    if (id == 1) throw new Error("Esta intentando acceder a una cuenta de Admin.")
    else next()
})

// Este middleware maneja el error que envia el middleware de arriba
app.use((error, req, res, next)=>{
    if(error != null) res.status(401).send(error.toString())
    else next()
})

// Si pasa por los dos middlewares y esta todo ok, entonces si puede ver la informacion
app.get('/user/:id', (req, res)=>{
    let id = req.params.id
    return res.send("Hola! ID de usuario: "+id)
})

app.listen(port, ()=>{
    console.log("Servidor escuchando en puerto "+port)
})