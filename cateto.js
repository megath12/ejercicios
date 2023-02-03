
let hip;
let y,u;

function hipo(ca,co){
    hip=(co**2+ca**2)**(1/2)
    console.log("El cateto opuesto es "+co)
    console.log("El cateto adyacente es "+ca)
    console.log("La hipotenusa es "+hip)    
    console.log("\n")
}

function hipote(ca,co){
    hip=Math.sqrt((Math.pow(co,2))+(Math.pow(ca,2)))
    console.log("El cateto opuesto es "+co)
    console.log("El cateto adyacente es "+ca)
    console.log("La hipotenusa es "+hip)    
    console.log("\n")
}

hipo(5,8)
hipote(5,8)

//console.log(Math.round(4.5434343,2))