import { createServer } from 'http';
import { pepePropiedades } from './pepe.js'

const requestListener = function (req, res) {
    let pepe = pepePropiedades()
    res.writeHead(200);
    res.end(`Pepe tiene ${pepe.edad} anos y es ${pepe.genero}`);
  }


const port = 8080;
const server = createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);