class Cola{
    
    constructor(){
        this.datos = [];
    }

    encolar(valor){
        this.datos.push(valor);
    }

    desencolar(){                       //Elimina el primer elemento
        if(this.datos.length == 0){
            return null;
        }
        return this.datos.shift();
    }

    mostrarFrente(){
        if(this.datos.length == 0){
            return null;
        }
        return this.datos[0];
    }

    mostrarFinal(){
        if(this.datos.length == 0){
            return null;
        }
        return this.datos[this.datos.length - 1];
    }
}

/*
EJERCICIO 1

Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]
*/

const cola1 = new Cola();
cola1.encolar('amarillo');
cola1.encolar('rosa');
cola1.encolar('rojo');
cola1.encolar('verde');
cola1.encolar('azul');
cola1.encolar('negro');
cola1.encolar('morado');
cola1.encolar('blanco');

const funcion1 = (miCola) => {
    let colaPar = new Cola();
    let colaImpar = new Cola();
    let tipoIndice = 'impar';

    while(miCola.mostrarFinal() != null){
        if(tipoIndice == 'impar'){
            colaImpar.encolar(miCola.mostrarFrente());
            miCola.desencolar();

            tipoIndice = 'par';
        } else if(tipoIndice == 'par'){
            colaPar.encolar(miCola.mostrarFrente());
            miCola.desencolar();

            tipoIndice = 'impar';
        }
    }

    return {impar : colaImpar, par: colaPar};
}

let misColas = funcion1(cola1);
console.log('Impar: ' + misColas.impar.datos)
console.log('Par: ' + misColas.par.datos);


/*
EJERCICIO 2

Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
*/

const cola2 = new Cola();
cola2.encolar({ user:'User1', ticket:true });
cola2.encolar({ user:'User2', ticket:true });
cola2.encolar({ user:'User3', ticket:false });
cola2.encolar({ user:'User4', ticket:true });
cola2.encolar({ user:'User5', ticket:false });
cola2.encolar({ user:'User6', ticket:false });
cola2.encolar({ user:'User7', ticket:true });
cola2.encolar({ user:'User8', ticket:true });
cola2.encolar({ user:'User9', ticket:true });
cola2.encolar({ user:'User10', ticket:false });
cola2.encolar({ user:'User11', ticket:true });

const funcion2 = (miCola) => {
    let ultimoElementoCola = miCola.mostrarFinal();

    do{
        if(miCola.mostrarFrente().ticket == true){
            miCola.encolar(miCola.mostrarFrente());
            miCola.desencolar();
        } else {
            miCola.desencolar();
        }
    }while(ultimoElementoCola != miCola.mostrarFinal());

    return miCola.datos;
}

console.log(funcion2(cola2));