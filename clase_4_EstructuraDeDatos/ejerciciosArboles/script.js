class Nodo{
    constructor(valor){
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class ArbolBinario{
    constructor(){
        this.raiz = null;
    }

    /* EL objetivo de este método es INSERTAR un nuevo elemento en el árbol binario. */
    insertar(valor){
        if(this.raiz == null){      /* Si la raiz del arbol está vacía entonces: */    
            /* Creamos un nuevo objeto tipo Nodo */
            const nuevoNodo = new Nodo(valor);
            /* Le asignamos a la raíz el nuevo Nodo */
            this.raiz = nuevoNodo;
        } else {                    /* Si ya existe una raíz del árbol entonces: */
            /* Creamos una variable llamada nodoActual y le asignamos el valor que tengamos en raíz. */
            let nodoActual = this.raiz;
            /* Mientras que el retorno sea true, entonces: */
            while(true){
                if(valor < nodoActual.valor){                   /* Si el valor es menor que el valor que tenemos en raíz*/
                    if(nodoActual.izquierdo == null){           /* y el valor izquierdo de nuestro nodo actual está vacío: */
                        let nuevoNodo = new Nodo(valor);        /* Creamos el objeto tipo Nodo llamado nuevoNodo */
                        nodoActual.izquierdo = nuevoNodo;       /* Le asignamos  el nuevo nodo al nodoActual*/
                        return;                                 /* Return 0 */

                    } else {                                    /* Si el valor es mayor que o igual al nodo raíz */
                        nodoActual = nodoActual.izquierdo;      /* A nuestro nodo actual le vamos a asignar el valor que tiene su valor izquiedo */
                    }

                } else if(valor >= nodoActual.valor){
                    
                    if(nodoActual.derecho == null){
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

    inOrden(){
        console.log('InOrden: ');

        if(this.raiz == null){
            return;
        }

        let nodoActual = this.raiz;
        const pilaAuxiliar = [];

        while(nodoActual != null || pilaAuxiliar.length > 0){
            while(nodoActual != null){
                pilaAuxiliar.push(nodoActual);
                nodoActual = nodoActual.izquierdo;
            }

            nodoActual = pilaAuxiliar.pop();
            console.log(`${nodoActual.valor}`);
            nodoActual = nodoActual.derecho;
        }
    }

    preOrden(){
        console.log('PreOrden: ');

        if(this.raiz = null){
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

    preOrden(){         //Corregir
        console.log('PreOrden: ');

        if(this.raiz = null){
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


    
}

