let paises = ["México", "Guatemala", "El Salvador", "Panamá"];
let palabraMayor = paises[0]
let cantidadLetrasMayor = palabraMayor.length;
let cantidadLetras = 0;

for(let i = 0; i < paises.length; i++){
    cantidadLetras = paises[i].length;
    if (cantidadLetrasLetras > cantidadLetrasMayor){
        palabraMayor = paises[i];
        cantidadLetrasMayor = cantidadLetras;
    }
}

console.log(palabraMayor);