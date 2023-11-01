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


// Actividad 1

/* 
Hacer una función que perciba como parámetros una pila, y un número. La función deberá retornar tantos elementos como diga el número (segundo parámetro).

Entrada: mifuncion(['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'], 4);
Salida: ['Manzana', 'Cebolla', 'Apio', 'Naranja'];
*/

const miPila1 = new Pila();

miPila1.agregar('Manzana');
miPila1.agregar('Cebolla');
miPila1.agregar('Apio');
miPila1.agregar('Naranja');
miPila1.agregar('Papaya');
miPila1.agregar('Sandía');
miPila1.agregar('Melón');

const funcion1 = (miPila, numeroElementos) => {
    let nuevaPila = miPila.datos.slice(1, numeroElementos + 1);
    return nuevaPila;
}

console.log(miPila1.datos);
let miPila1_2 = funcion1(miPila1, 4);
console.log(miPila1_2);

// Actividad 2

/* 
Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.

Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]
*/

const miPila2 = new Pila();

miPila2.agregar(3);
miPila2.agregar(2);
miPila2.agregar(3);
miPila2.agregar(4);
miPila2.agregar(6);
miPila2.agregar(8);
miPila2.agregar(1);
miPila2.agregar(2);
miPila2.agregar(5);
miPila2.agregar(5);

const funcion2 = (miPila, elementoNuevo, elementoAntiguo) => {
    let bandera = false;
    
    while (bandera == false){
        if (miPila.mostrarTope() == elementoAntiguo){
            miPila.eliminar();
            miPila.agregar(elementoNuevo);
            bandera = true;
        } else {
            miPila.eliminar();
        }
    }

    return miPila.datos;
}

console.log(miPila2.datos);
let miPila2_2 = funcion2(miPila2, 7, 2);
console.log(miPila2_2);

// Actividad 3

/* 
Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.

Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
*/

const miPila3 = new Pila();
const recorrido = ['Córdoba', 'Fortín', 'Ixtac', 'Orizaba', 'Río Blanco', 'Nogales', 'Ciudad Mendoza'];

const funcion3 = (miPila, recorrido) => {

    for(let i = 0; i <= recorrido.length - 1; i++){
        miPila.agregar(recorrido[i]);
        console.log('Voy de ida, estoy en: ' + miPila.mostrarTope());
    }

    for(let j = 0; j <= recorrido.length - 1; j++){
        console.log('Voy de regreso, estoy en: ' + miPila.mostrarTope());
        miPila.eliminar();
    }

}

funcion3(miPila3, recorrido);


// Actividad 4

/* 
Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.
*/

const miPila4 = new Pila();

miPila4.agregar('c1');
miPila4.agregar('c2');
miPila4.agregar('c3');
miPila4.agregar('c4');
miPila4.agregar('c5');
miPila4.agregar('c6');
miPila4.agregar('c7');
miPila4.agregar('c8');
miPila4.agregar('c9');
miPila4.agregar('c10');


const funcion4 = (miPila, contenedorEliminar) => {

    let pilaRespaldo = new Pila();
    let contenedorAGuardar = '';
    let seEncontroContenedor = false;
    let sePasoElRespaldo = false;

    while(seEncontroContenedor == false){
        if(miPila.mostrarTope() == contenedorEliminar){
            miPila.eliminar();
            seEncontroContenedor = true;
        } else {
            contenedorAGuardar =  miPila.mostrarTope();
            pilaRespaldo.agregar(contenedorAGuardar);
            miPila.eliminar()
        }
    }

    while(sePasoElRespaldo == false){
        miPila.agregar(pilaRespaldo.mostrarTope());
        pilaRespaldo.eliminar();

        if(pilaRespaldo.mostrarTope() == null){
            sePasoElRespaldo = true;
        }
    }

    return miPila;
}

console.log(miPila4);
nuevaPila = funcion4(miPila4, 'c3');
console.log(nuevaPila.datos);