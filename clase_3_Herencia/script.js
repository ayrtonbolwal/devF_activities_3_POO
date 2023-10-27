class Persona{
    constructor(nombre, genero, edad, colorDePiel){
        this.colorDePiel = colorDePiel;
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
    }

    platicarSinPolimorgismo(persona){
        this.saludar();

        if(persona instanceof Doctor){
            persona.saludarComoDoctor();
        } else if(persona instanceof Artista){
            persona.saludarComoArtista();
        } else {
            persona.saludar();
        }
    }

    platicarConPolimorfismo(persona){
        this.saludar();
        persona.saludar();
    }
}

class Doctor extends Persona{
    constructor(nombre, genero, edad, colorDePiel, especialidad){
        super(nombre, genero, edad, colorDePiel);
        this.especialidad = especialidad;
    }

    inyectar(persona){
        console.log(`Estoy inyectado a ${persona.nombre}`);
    }

    //Override
    saludar(){
        console.log(`Hola, soy ${this.nombre} y mi especialidad es ${this.especialidad}`);
    }

    saludarComoDoctor(){
        console.log(`Hola, soy ${this.nombre} y mi especialidad es ${this.especialidad}`);
    }
}

class Artista extends Persona{
    constructor(nombre, genero, edad, colorDePiel, numeroDeObras){
        super(nombre, genero, edad, colorDePiel);
        this.numeroDeObras = numeroDeObras;
    }

    crearUnaObra(){
        console.log(`Estoy creando mi obra número ${this.numeroDeObras + 1}`);
        this.numeroDeObras++;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo : ${this.numeroDeObras}`);
    }

    saludarComoArtista(){
        console.log(`Hola, soy ${this.nombre} y tengo : ${this.numeroDeObras}`);
    }
}

const persona1 = new Persona('Tonatiuh', 'Masculino', 24, 'Café');
const doctor1 = new Doctor('House', 'Masculino', 50, 'Blanca', 'Medicina interna');
const artista1 = new Artista('Mike', 'Masculino', 40, 'Amarilla', 102);

console.log('Personas platicando: ');
persona1.platicarConPolimorfismo(doctor1);
persona1.platicarConPolimorfismo(artista1);