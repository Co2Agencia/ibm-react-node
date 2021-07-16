import * as http from "http"

const key = "4a11f7e678c24ad8b77200816211207"
const place = "Paris"
let options = {
    host: "api.weatherapi.com",
    path: `/v1/current.json?key=${key}&q=${place}`,
    method:"GET"
}

let data_to_send

let request = http.request(options, (response)=>{
    let data;
    let result = "";

    response.on("data", (response_data)=>{
        data = response_data;
    })

    response.on("end", ()=>{
        console.log("Informacion....")
        let clean_data = JSON.parse(data)
        let temp = clean_data.current.temp_c

        console.log(temp)

        data_to_send = temp
    })

});

request.on("error", (error)=>{
    console.log(error)

    data_to_send = error
})

request.end();

export function request_data(){
    return data_to_send
}