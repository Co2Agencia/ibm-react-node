import { request_data } from "./index.js"
import {createServer} from "http"

function requestHandler(req,res){
    let temp = request_data()
    console.log(temp.data)
    res.writeHead(200)
    res.end(`La temperatura de Paris es de ${temp} grados`)
}

const port = 8080
const server = createServer(requestHandler)
console.log(`Servidor escuchando en puerto ${port}`)

server.listen(port)