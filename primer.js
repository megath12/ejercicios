// Mi primer codigo de Generation

let age=23;
let name="javascript";
let edo=false;

function volar(a){
    console.log("Tu numero es "+a)
}


// NUMERO PAR O IMPAR
function comparar(n){
    if(n%2==0){
        console.log(n+" es par")
    }
    else{
        console.log(n+" es impar")
    }
}
comparar(11)



// DIVISIBLE ENTRE 7 Y 8
function sicho(v){
    if( v%7==0 && v%8==0){
        console.log(v+" Verdadero");
    }
    else{
        console.log(v+" Falso")
    }
}
sicho(56)
sicho(511)



// NUMERO MAYOR A 10
function di(w){
    if(w>10){
        console.log(w+" Verdadero")
    }
    else{
        console.log(w+" Falso")
    }
}
di(2)
di(16)



// NUMERO DIVISIBLE ENTRE 4 O 9
function cuane(v){
    console.log(v+" es divisible entre 4 o 9?")
    if( v%9==0 || v%4==0){
        console.log(" Verdadero");
    }
    else{
        console.log(" Falso")
    }
}
cuane(3)
cuane(9)
