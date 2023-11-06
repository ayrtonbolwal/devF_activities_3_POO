// Clase Nodo

class Nodo{
    constructor(valor){
        this.valor = valor;
        this.nodoIzquierdo = null;
        this.nodoDerecho = null;
    }
}

class Arbol{

    constructor(){
        this.raiz = null;
    }

    insertar(valor){

        if(this.raiz == null){
            /* Si el nodo raíz está vacío entonces guardamos el valor que
            nos proporcionó el usuario en este lugar.  */
            const nuevoNodo = new Nodo(valor);
            this.raiz = nuevoNodo;
        } else {
            /* Si el nodo raiz se encuentra ocupado
            entonces creamos una variable de seguimiento llamada
            nodoActual y le pasaremos el valor de la raíz. */
            
            let nodoActual = this.raiz;

            while(true){
                if(valor < nodoActual.valor){
                /* Si el valor otorgado por el usuario es
                menor que el valor del nodo actual, entonces: */

                    if(nodoActual.nodoIzquierdo == null){
                        /* Si el nodoActual.nodoIzquierdo está vacío entonces
                        creamos un nuevo nodo y lo guardamos aquí, y salimos.  */
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.nodoIzquierdo = nuevoNodo;
                        return;

                    } else {
                        /* Sii el nodoActual.nodoIzquierdo está ocupado, entonces
                        este nodo será nuestro nuevo nodo actual y salimos.  */
                        nodoActual = nodoActual.nodoIzquierdo;

                    }
                }

                if(valor >= nodoActual.valor){
                /* Si el valor otorgado por el usuario es mayor que
                o igual que el valor del nodoActual entonces: */

                    if(nodoActual.nodoDerecho == null){
                        /* Si el nodoDerecho de nuestro nodoActual está vacío entonces
                        creamos un nuevo objeto Nodo y lo guardamos aquí. */
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.nodoDerecho = nuevoNodo;
                        return;

                    } else {
                        /* Si el nodoDerecho de nuestro objeto no está vacío entonces
                        el nodoDerecho de nuestro nodoActual, pasará a ser nuestro nodoActual. */
                        nodoActual = nodoActual.nodoDerecho;

                    }

                }

            }

        }

    }

    buscar(valor){
        /* Creamos una variable de seguimiento: */
        let nodoActual = this.raiz;
        
        /* Si el nodo raíz es nulo entonces devolvemos falso.*/
        if(this.raiz == null){
            return false;
        }

        /* Mientras el nodoActual no esté vacío, verificamos
        si su valor es igual al valor, en caso de ser así entonces 
        retornamos true.*/
        while(nodoActual != null){

            /* Si el valor es el que estamos buscando entonces retornamos true.*/
            if(nodoActual.valor == valor){
                return true;
            }

            /* Si el valor no se encuentra entonces verificará si el valor es menor
            o mayor igual al valor del nodoActual, si es menor entonces pasaremo al nodo
            izquierdo si es mayor o igual seguro se encuentra en el nodoDerecho. */
            if(valor < nodoActual.valor){
                nodoActual = nodoActual.nodoIzquierdo;
            }
            if(valor >= nodoActual.valor){
                nodoActual = nodoActual.nodoDerecho;
            }
        }
    }

    desplegarInOrden(){

        /* La primera parte se encarga de mandar un mensaje inOrden, para después verificar si la raíz está vacía en caso de estarlo se acaba la función.  */
        console.log('InOrden: ');

        if(this.raiz == null){
            return;
        }

        /* La segunda parte se encarga de que al nodoActual le pasamos el valor del nodo Raíz para después crear una pilaAuxiliar en la que guardaremos el recorrido de nuestros nodos. */
        let nodoActual = this.raiz;
        const pilaAuxiliar = [];

        let i = 0;
        let j = 0;

        /* La tercera parte es un recorrido, mientras la pila auxiliar no esté vacía o el nodoActual no esté vacío: se encargará de hacer un bucle que mientras el nodoActual no esté vacío vamos a guardar el nodoActual en un arreglo y nuestro nodoActual pasará a ser el nodoIzquierdo.
        
        Una vez nos decisimos de todos los nodos izquierdos */
        while(nodoActual != null || pilaAuxiliar.length > 0){
            j = 0;
            
            console.log(`🐱 ${i} While1`);
            
            while(nodoActual != null){
                console.log(`🐟   ${j} While2: El nodo actual es: ${nodoActual.valor}`);
                pilaAuxiliar.push(nodoActual);
                console.log(`Se hace push a la pila, la pila es: ${pilaAuxiliar}`);
                nodoActual = nodoActual.nodoIzquierdo;
                j++;
            }

            console.log(`Se cierra el ciclo while2 🔵 el arreglo es: ${pilaAuxiliar}`);

            nodoActual = pilaAuxiliar.pop();
            console.log(`Eliminamos el último valor del arreglo, es: ${nodoActual.valor}, la pila queda: ${pilaAuxiliar}`);
            console.log(`${nodoActual.valor}`);
            nodoActual = nodoActual.nodoDerecho;
            i++;
        }

        console.log(`Se cierra el ciclo while1 🔵`);
    }

    desplegarPreOrden(){

    }

}

const miArbol = new Arbol();
miArbol.insertar(10);
miArbol.insertar(5);
miArbol.insertar(15);
miArbol.insertar(3);
miArbol.insertar(7);
miArbol.insertar(13);
miArbol.insertar(17);
miArbol.insertar(1);
miArbol.insertar(4);
miArbol.insertar(6);
miArbol.insertar(8);
miArbol.insertar(12);
miArbol.insertar(14);
miArbol.insertar(16);
miArbol.insertar(18);

console.log(miArbol.raiz);
console.log(miArbol.desplegarInOrden());

// Ejercicio 1. Escribe una función que dados dos árboles binarios determine si son idénticos o no.


// Ejercicio 2. Escribe una función que dado un arbol binario A, obtenga una copia B del mismo. 


// Ejercicio 3. Escribe una función que visualice los tnodos que están en el nivel "n" de un árbol binario. 

// Ejercicio 4. Escribe una función que devuelva el número de hojas de un árbol binario. 