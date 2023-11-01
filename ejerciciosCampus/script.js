// CLase Pila
class Pila{
    constructor(){
        this.datos = [];
    }

    agregar(nuevoValor){
        this.datos.push(nuevoValor);
    }

    eliminar(){
        if(this.datos.length == 0){
            return null;
        }
        return this.datos.pop();
    }

    mostrarTope(){
        if(this.datos.length == 0){
            return null;
        }
        return this.datos[this.datos.length-1];
    }
}

// Instanciación de Ejemplo
const miPila1 = new Pila();

miPila1.agregar('Manzana');
miPila1.agregar('Cebolla');
miPila1.agregar('Apio');
miPila1.agregar('Naranja');
miPila1.agregar('Papaya');
miPila1.agregar('Sandía');
miPila1.agregar('Melón');


// Actividad 1

/* 
Hacer una función que perciba como parámetros una pila, y un número. La función deberá retornar tantos elementos como diga el número (segundo parámetro).

Entrada: mifuncion(['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón']);
Salida: ['Manzana', 'Cebolla', 'Apio', 'Naranja'];
*/

const act1 = (miPila, numeroElementos) => {
    console.log(miPila.datos.slice(0, numeroElementos));
}

console.log(act1(miPila1, 4));


// Actividad 2

/* 
Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.

Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]

*/


const miPila2 = new Pila();

miPila2.agregar(3)
miPila2.agregar(2)
miPila2.agregar(3)
miPila2.agregar(4)
miPila2.agregar(6)
miPila2.agregar(8)
miPila2.agregar(1)
miPila2.agregar(2)
miPila2.agregar(5)
miPila2.agregar(5)

const act2 = (miPila, numeroNuevo, numeroViejo) => {

    let ultimoValor = miPila.mostrarTope();
    let flag = false;

    while (flag == false){
        if(ultimoValor == numeroViejo){
            miPila.eliminar();
            miPila.agregar(numeroNuevo);
            flag = true;
        } else {
            miPila.eliminar();
        }
    }

    return miPila;
}

let nuevaPila2 = act2(miPila2, 7, 2);
console.log(nuevaPila2);

// Actividad 3

/* 

*/

// Actividad 4

/* 

*/