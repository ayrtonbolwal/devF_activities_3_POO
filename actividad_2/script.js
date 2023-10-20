class Contacto{

    #nombre;
    #apellidos;
    #telefono;

    constructor(nombre, apellidos, telefono){
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#telefono = telefono;
    }

    getNombre() {
      return this.#nombre;
    }
    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getApellidos() {
      return this.#apellidos;
    }
    setApellidos(apellidos) {
        this.#apellidos = apellidos;
    }

    getTelefono() {
      return this.#telefono;
    }
    setTelefono(telefono) {
        this.#telefono = telefono;
    }

    devolverInfoContacto(){
        return(`${this.#nombre} - ${this.#apellidos} - ${this.#telefono}` );
    }
}

class ListaContactos{

    #listaContactos = [];

    constructor(){

    }

    get listaContactos() {
      return this.#listaContactos;
    }

    agregarContacto(contacto){
        this.#listaContactos.push(contacto)
    }

    buscarContacto(nombreContacto){
        let listaDeplegable = [];

        this.#listaContactos.forEach(contacto => {
            if(contacto.getNombre() == nombreContacto){
                listaDeplegable.push(contacto)
            }
        });

        if(listaDeplegable.length == 0){
            console.log(`No se encuentra el contacto.`)
        } else {
            listaDeplegable.forEach(element => {
                console.log(`${element.getNombre()} ${element.getApellidos()}`);
            });
        }
    }

    desplegarContactos(){
        return this.#listaContactos;
    }
}

let contacto1 = new Contacto('Ayrton', 'Bolaños Waldo', '28931208312');
let contacto2 = new Contacto('Juan', 'Perez Barrios', '28931208123');
let contacto3 = new Contacto('Sebastian', 'Perez W', '2893112311');
let contacto4 = new Contacto('Juan', 'Ramírez Luna', '28931208333');

let listaContactos_1 = new ListaContactos();
listaContactos_1.agregarContacto(contacto1);
listaContactos_1.agregarContacto(contacto2);
listaContactos_1.agregarContacto(contacto3);
listaContactos_1.agregarContacto(contacto4);
listaContactos_1.buscarContacto('Juan');



