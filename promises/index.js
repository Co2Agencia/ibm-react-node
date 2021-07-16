import * as fs from "fs"

const infoText = new Promise((resolve, reject) => {
    fs.readFile("./promises/texts.txt", (error, data)=>{
        if (error) reject(error)
        else resolve(data.toString())
    })
})

infoText.then(
    (data) =>console.log(data),
    (error) => {console.log("Hubo un error.."), console.log(error)}
)
