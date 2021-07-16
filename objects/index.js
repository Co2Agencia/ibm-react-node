class Rectangulo{
    constructor(ancho, alto){
        this.ancho = ancho
        this.alto = alto
    }
}

class Cuadrado extends Rectangulo{
    constructor(ancho, alto){
        if(alto === ancho){
            super(ancho, alto)
        } 
        else{
            super(alto, alto)
        } 
    }
}


let rectangulito = new Rectangulo(10, 15)
let cuadradito = new Cuadrado(10, 15)

console.log("Las medidas del rectangulito son.. ")
console.log(rectangulito.alto, rectangulito.ancho) // 15 x 10

console.log("Las medidas del cuadradito son.. ")
console.log(cuadradito.alto, cuadradito.ancho) // 15 x 15