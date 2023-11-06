class Nodo{
    constructor(valor){
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
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
                    if(nodoActual.izquierdo == null){
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.izquierdo = nuevoNodo;
                        return;
                    } else {
                        nodoActual = nodoActual.izquierdo;
                    }
                } else {
                    if(nodoActual.derecho ==  null){
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.derecho = nuevoNodo;
                        return;
                    } else {
                        nodoActual = nodoActual.derecho;
                    }
                }
            }
        }
    }

    buscar(valor){
        let nodoActual = this.raiz;

        if(nodoActual == null){
            return false;
        }

        while(nodoActual != null){
            if(nodoActual.valor == valor){
                return true;
            }

            if(valor < nodoActual.valor){
                nodoActual = nodoActual.izquierdo;
            } else {
                nodoActual = nodoActual.derecho;
            }
        }

        return false;
    }

    inorden(){
        console.log('Inorden:');

        if(this.raiz == null){
            return;
        }

        let nodoActual = this.raiz;
        const pilaAuxiliar = [];

        while(nodoActual !== null || pilaAuxiliar.length > 0){
            while(nodoActual != null){
                pilaAuxiliar.push(nodoActual);
                nodoActual = nodoActual.izquierdo;
            }

            nodoActual = pilaAuxiliar.pop();
            console.log(`${nodoActual.valor}`);
            nodoActual = nodoActual.derecho;
        }
    }

    preorden(){
        console.log('Preorden:');

        if(this.raiz == null){
            return;
        }

        let nodoActual = this.raiz;
        const pilaAuxiliar = [];

        while(nodoActual !== null || pilaAuxiliar.length > 0){
            while(nodoActual != null){
                pilaAuxiliar.push(nodoActual);
                console.log(`${nodoActual.valor}`);
                nodoActual = nodoActual.izquierdo;
            }

            nodoActual = pilaAuxiliar.pop();
            nodoActual = nodoActual.derecho;
        }
    }

    postorden(){
        console.log('PostOrden:');

        if(this.raiz == null){
            return;
        }

        const pilaAuxiliar1 = [];
        const pilaAuxiliar2 = [];
        pilaAuxiliar1.push(this.raiz);

        while(pilaAuxiliar1.length > 0){
            const nodoActual = pilaAuxiliar1.pop();
            pilaAuxiliar2.push(nodoActual);

            if(nodoActual.izquierdo !== null) {
                pilaAuxiliar1.push(nodoActual.izquierdo);
            }
            if(nodoActual.derecho !== null) {
                pilaAuxiliar1.push(nodoActual.derecho);
            }
        }
        

        while(pilaAuxiliar2.length > 0){
            const nodo = pilaAuxiliar2.pop();
            console.log(`${nodo.valor}`)
        }
    }

    // 1.- Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.
    compararArboles(arbolB){
        let arbolComparar = arbolB;
        let getPilaA = () => {
            let pilaUtilidadA = [];

            if(this.raiz == null){
                return;
            }

            let nodoActual = this.raiz;
            const pilaAuxiliar = [];
    
            while(nodoActual !== null || pilaAuxiliar.length > 0){
                while(nodoActual != null){
                    pilaAuxiliar.push(nodoActual);
                    nodoActual = nodoActual.izquierdo;
                }
    
                nodoActual = pilaAuxiliar.pop();
                pilaUtilidadA.push(nodoActual.valor);
                nodoActual = nodoActual.derecho;
            }

            return pilaUtilidadA;
        };
        let getPilaB = (arbolComparar) => {
            let pilaUtilidadB = [];

            if(arbolComparar.raiz == null){
                return;
            }

            let nodoActual = arbolComparar.raiz;
            const pilaAuxiliar = [];
    
            while(nodoActual !== null || pilaAuxiliar.length > 0){
                while(nodoActual != null){
                    pilaAuxiliar.push(nodoActual);
                    nodoActual = nodoActual.izquierdo;
                }
    
                nodoActual = pilaAuxiliar.pop();
                pilaUtilidadB.push(nodoActual.valor);
                nodoActual = nodoActual.derecho;
            }

            return pilaUtilidadB;
        };

        let pilaUtilidadA = getPilaA();
        console.log(pilaUtilidadA);
        let pilaUtilidadB = getPilaB(arbolB);
        console.log(pilaUtilidadB);

        let diferencia = false;
        let i = 0;

        if(pilaUtilidadA.length == pilaUtilidadB.length){
            while((diferencia == false) && i < pilaUtilidadA.length){
                if(pilaUtilidadA[i] == pilaUtilidadB[i]){
                    diferencia = false;
                } else {
                    diferencia = true;
                }
                i++;
            }

            if(diferencia == false){
                console.log('Los árboles son idénticos');
            } else {
                console.log('Los árboles tienen diferencias');
            }
        } else {
            console.log('Los árboles tienen diferencias.')
        }

    }

    // 2.- Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.
    copiarArbol(){
        let getPreOrden = () => {
            let pila = [];

            if(this.raiz == null){
                return;
            }
    
            let nodoActual = this.raiz;
            const pilaAuxiliar = [];
    
            while(nodoActual !== null || pilaAuxiliar.length > 0){
                while(nodoActual != null){
                    pilaAuxiliar.push(nodoActual);
                    pila.push(nodoActual.valor);
                    nodoActual = nodoActual.izquierdo;
                }
    
                nodoActual = pilaAuxiliar.pop();
                nodoActual = nodoActual.derecho;
            }

            return pila;
        }

        let pilaUtilidadPreOrden = getPreOrden();
        let i = 0;
        let arbolCopia = new Arbol();

        while(i < pilaUtilidadPreOrden.length){
            arbolCopia.insertar(pilaUtilidadPreOrden[i]);
            i++;
        }

        return arbolCopia;
    }

    // 3.- Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.
     

    // 4.- Escribe una función que devuelva el número de hojas de un árbol binario. 
    devolverHojas(){
        const pilaArbolA = () => {
            if(this.raiz == null){
                return;
            }
    
            let nodoActual = this.raiz;
            const pilaAuxiliar = [];
            let pilaA = [];
    
            while(nodoActual !== null || pilaAuxiliar.length > 0){
                while(nodoActual != null){
                    pilaAuxiliar.push(nodoActual);
                    nodoActual = nodoActual.izquierdo;
                }
    
                nodoActual = pilaAuxiliar.pop();
                if((nodoActual.izquierdo == null) && (nodoActual.derecho == null)){
                    if(pilaA.indexOf(nodoActual.valor) === -1){
                        pilaA.push(nodoActual.valor);
                    }
                }
                nodoActual = nodoActual.derecho;
            }

            return pilaA;
        }

        let pilaHojas = pilaArbolA();

        console.log(`La cantidad de hojas del arbol son: ${pilaHojas.length} y son ${pilaHojas}`);
    }

}


/*

10
5               15
3       8       12      17
2   4   7   9   11  13  16  18

*/

const nuevoArbol = new Arbol();

nuevoArbol.insertar(10);
nuevoArbol.insertar(5);
nuevoArbol.insertar(15);
nuevoArbol.insertar(3);
nuevoArbol.insertar(8);
nuevoArbol.insertar(12);
nuevoArbol.insertar(17);
nuevoArbol.insertar(2);
nuevoArbol.insertar(4);
nuevoArbol.insertar(7);
nuevoArbol.insertar(9);
nuevoArbol.insertar(11);
nuevoArbol.insertar(13);
nuevoArbol.insertar(16);
nuevoArbol.insertar(18);

const nuevoArbolB = new Arbol();

nuevoArbolB.insertar(10);
nuevoArbolB.insertar(5);
nuevoArbolB.insertar(15);
nuevoArbolB.insertar(3);
nuevoArbolB.insertar(8);
nuevoArbolB.insertar(12);
nuevoArbolB.insertar(17);
nuevoArbolB.insertar(2);
nuevoArbolB.insertar(4);
nuevoArbolB.insertar(7);
nuevoArbolB.insertar(9);
nuevoArbolB.insertar(11);
nuevoArbolB.insertar(13);
nuevoArbolB.insertar(16);
nuevoArbolB.insertar(18);

console.log(nuevoArbol);

nuevoArbol.compararArboles(nuevoArbolB);

/* Instancia devolver cantidad de Hojas */
nuevoArbol.devolverHojas();
/* Instancia copiar árbol */
const nuevoArbolC = nuevoArbol.copiarArbol();
/* Instancia comparar arboles */
nuevoArbol.compararArboles(nuevoArbolC);
