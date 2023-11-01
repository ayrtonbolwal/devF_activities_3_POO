// Los arrays almacenando múltiples datos en una sola variable: //
let miArreglo_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let miArreglo_2 = [9, 10, 11, 12, 13, 14, 15];

// Añade uno o más elementos al final del arreglo y devuelve la nueva longitud del arreglo.
miArreglo_1.push(10);

// Elimina el último elemento del arreglo y lo devuelve.
miArreglo_1.pop();

// Añade uno o más elementos al principio del arreglo y devuelve la nueva longitud del arreglo.
miArreglo_1.unshift("a", "b", "c");

// Elimina el primer elemento del arreglo y lo devuelve.
miArreglo_1.shift();

// Combina dos o más arreglos y devuelve un nuevo arreglo resultante sin modificar los arreglos originales.
miArreglo_1.concat(miArreglo_1, miArreglo_2);

// Convierte los elementos del arreglo en una cadena, separados por el carácter especificado, y devuelve la cadena resultante.
miArreglo_1.join(" - ");

// Devuelve una copia superficial de una porción del arreglo, desde el índice inicio hasta el índice fin (sin incluir fin).
miArreglo_1.slice(4, 5);

// Pilas

/* El último en entrar es el primero en salir, cuando apilamos platos, 
el último plato que apilamos es el primero que tomamos.  */

// Push agrega un nuevo valor a la pila, ubicándolo al final de ésta

// Pop retornar el último valor ingresado a la pila, sacándolo de ésta

// Peek, retorna el último valor ingresado a la pila, sin sacarlo de ésta

// Size, retorna el número de elementos que contiene la pila

// Print muestra el contenido de la pila

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

const pila1 = new Pila();

pila1.agregar(5);
pila1.agregar(4);
pila1.agregar(3);

console.log(pila1.mostrarTope());
pila1.eliminar();
console.log(pila1.mostrarTope());
pila1.eliminar();
console.log(pila1.mostrarTope());
pila1.eliminar();
console.log(pila1.mostrarTope());

/*

Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

*/

class Cola{

    constructor(){
        this.datos = [];
    }

    encolar(valor){
        this.datos.push(valor);
    }

    desencolar(){
        if(this.datos.length == 0){
            return null;
        }

        return this.datos.shift();
    }

    mostrarFrente(){
        if(this.datos.length == 0){
            return null;
        }
        return this.datos[0]
    }

    mostrarFinal(){
        if(this.datos.length == 0){
            return null;
        }
        return this.datos[this.datos.length - 1];
    }

}