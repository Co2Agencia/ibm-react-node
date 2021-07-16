import { createServer } from "http"
import { saludo } from "./saludador.js"

function requestListener(req, res){
    res.writeHead(200)
    res.end(saludo())
}

const port = 8080
const server = createServer(requestListener)
console.log('Servidor escuchando en puerto: ' + port);
server.listen(port)