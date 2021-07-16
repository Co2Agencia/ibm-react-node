import express from "express"

const app = express()
const port = 8000

function getTime(req, res, next){
    req.time = Date()
    next()
}

app.use(getTime)

app.get("/", (req,res)=>{
    res.send("Request recibido el: "+req.time)
})

app.listen(port, ()=>{
    console.log("Servidor escuchando en puerto: "+port)
})