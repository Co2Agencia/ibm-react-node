const express = require("express");
const app = new express();
const port = 8000


// Le decimos a express donde esta la carpeta static
app.use(express.static('static_files'))


app.listen(port, ()=>{
    console.log(`Servidor escuchando en puerto ${port}`)
})