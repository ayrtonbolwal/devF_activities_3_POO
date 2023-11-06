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
            const nuevoNodo = new Nodo(valor);
            this.raiz = nuevoNodo;
        } else {

            let nodoActual = this.raiz;

            while(true){
                if(valor < nodoActual.valor){
                    if(nodoActual.nodoIzquierdo == null){
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.nodoIzquierdo = nuevoNodo;
                        return;
                    } else {
                        nodoActual = nodoActual.nodoIzquierdo;
                    }
                } else if(valor >= nodoActual.valor){

                    if(nodoActual.nodoDerecho == null){
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.nodoDerecho = nuevoNodo;
                        return;
                    } else {
                        nodoActual = nodoActual.nodoDerecho;
                    }
                }
            }
        }
    }

    buscar(valor){
        let nodoActual = this.raiz;

        if(nodoActual == null){
            //Si el nodo actual que verificamos es nulo entonces retornamos falso.
            return false;
        }

        while(nodoActual != null){
            
            //Si el valor si está en raíz entonces retornamos true.
            if(nodoActual.valor == valor){
                return true;
            }

            //Si el valor no está en raíz entonces el nodoActual ahora será el nodo izquierdo. Solo si es menor, si es mayor se irá al derehco. 
            if(valor < nodoActual.valor){
                nodoActual = nodoActual.nodoIzquierdo;
            } else {
                nodoActual = nodoActual.nodoDerecho;
            }
        }
    }

    inOrden(){
        console.log('InOrden: ');

        if(this.raiz == null){
            // Sale del metodo o función de la que se encuentra
            return;
        }

        let nodoActual = this.raiz;
        const pilaAuxiliar = [];

        // Mientras el nodo actual tenga contenido o la pila auxiliar sea mayor a 0.
        while(nodoActual != null || pilaAuxiliar.length > 0){
            // Mientras el nodo tenga contenido:
            while(nodoActual != null){
                // Insertamos en la pila auxiliar el nodo Actual, y el nodo actual será el izquierdo. 
                pilaAuxiliar.push(nodoActual);
                nodoActual = nodoActual.nodoIzquierdo;
            }

            // Eliminamos el nodo, lo mostramos en pantalla, y ahora el nodo Actual procederá a ser el nodo derecho.
            nodoActual = pilaAuxiliar.pop();
            console.log(`${nodoActual.valor}`);
            nodoActual = nodoActual.nodoDerecho;
        }
    }

    preOrden(){
        console.log('PreOrden: ');

        if(this.raiz == null){
            return;
        }

        const pilaAuxiliar = [];
        pilaAuxiliar.push(this.raiz);

        while(pilaAuxiliar.length > 0){
            const nodoActual = pilaAuxiliar.pop();
            console.log(`${nodoActual.valor}`);

            if(nodoActual.nodoDerecho){
                pilaAuxiliar.push(nodoActual.nodoDerecho);
            }

            if(nodoActual.nodoIzquierdo){
                pilaAuxiliar.push(nodoActual.nodoIzquierdo);
            }
        }
    }
    
}

const miArbol = new Arbol();
miArbol.insertar(10);
miArbol.insertar(5);
miArbol.insertar(15);
miArbol.insertar(3);

// miArbol.insertarNodo(nodo2);
// miArbol.insertarNodo(nodo2);
// miArbol.insertarNodo(nodo3);
/// miArbol.insertarNodo(nodo4);

console.log(miArbol.raiz);