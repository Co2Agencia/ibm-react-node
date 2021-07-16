import express from "express"

const app = express()
const port = 8000

let userRouter = express.Router()
let itemRouter = express.Router()

app.use('/user', userRouter)
app.use('/item', itemRouter)


userRouter.get("/about/:id", (req, res)=>{
    let id = req.params.id
    res.send("Respuesta about para el usuario #"+id)
})

userRouter.get("/details/:id", (req, res)=>{
    let id = req.params.id
    res.send("Detalles del usuario #"+id)
})

itemRouter.get("/about/:id", (req, res)=>{
    let id = req.params.id
    res.send("Respuesta about para el item #"+id)
})

itemRouter.get("/details/:id", (req, res)=>{
    let id = req.params.id
    res.send("Detalles del item #"+id)
})


app.listen(port, ()=>{
    console.log("Escuchando en el puerto "+port+"....")
})