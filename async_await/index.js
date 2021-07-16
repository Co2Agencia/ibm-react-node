import * as Axios from "axios"

const axios = Axios.default

const connectToURL = async(url)=>{
    const outcome = await axios.get(url);
    let listOfWork = outcome.data.work;
    listOfWork.forEach((work)=>{
      console.log(work.titleAuth);
    });
}

console.log("Before connect URL")
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham').catch(err=>console.log(err.toString()));
console.log("After connect URL")