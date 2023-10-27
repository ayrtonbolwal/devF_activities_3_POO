class Alumno{

    #nombre;
    #apellidos;
    #edad;
    #materias;
    #calificaciones;

    constructor(nombre, apellidos, edad, materias){
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#edad = edad;
        this.#materias = materias;
    }

    getNombre(){

    }
    getApellidos(){

    }
    getEdad(){

    }
    getMaterias(){

    }
    getCalificaciones(){

    }

    setNombre(nombre){
        this.#nombre = nombre;
    }
    setApellidos(apellidos){
        this.#apellidos = apellidos;
    }
    setEdad(edad){
        this.#edad = edad;
    }
    setMaterias(materias){
        this.#materias = materias;
    }
    setCalificaciones(calificaciones){
        this.#calificaciones = calificaciones;
    }

}

let btnAddAlumno = document.getElementById("btnAddAlumno");

btnAddAlumno.addEventListener('click', () => {
    let inputNombreAlumno = document.getElementById("inputNombreAlumno");
    let inputApellidosAlumno = document.getElementById("inputApellidosAlumno");
    let inputEdadAlumno = document.getElementById("inputEdadAlumno");
    let btnAddMateria = document.getElementById("btnAddMateria");
    let btnSaveAlumno = document.getElementById("btnSaveAlumno");
    
    let indiceAddMateria = 0;
    let arregloMaterias = [];

    btnAddMateria.addEventListener('click', () => {
        let elementAddMateria = document.createElement('div');
        elementAddMateria.setAttribute('class', 'elementAddMateria');
        elementAddMateria.setAttribute('id', `elementAddMateria_${indiceAddMateria}`);

        let inputAddMateria = document.createElement('input');
        inputAddMateria.setAttribute('class', 'inputAddMateria');
        inputAddMateria.setAttribute('id', `inputAddMateria_${indiceAddMateria}`)

        let btnSaveMateria = document.createElement('button');
        btnSaveMateria.setAttribute('class', 'btnSaveMateria');
        btnSaveMateria.innerText = 'Añadir';

        let btnEditMateria = document.createElement('button');
        btnEditMateria.setAttribute('class', 'btnEditMateria');
        btnEditMateria.innerText = 'Añadir';
        btnEditMateria.style.display = 'none';
        
        let btnDeleteMateria = document.createElement('button');
        btnDeleteMateria.setAttribute('class', 'btnDeleteMateria');
        btnDeleteMateria.innerText = 'Eliminar';

        elementAddMateria.appendChild(inputAddMateria);
        elementAddMateria.appendChild(btnSaveMateria);
        elementAddMateria.appendChild(btnEditMateria);
        elementAddMateria.appendChild(btnDeleteMateria);

        btnSaveMateria.addEventListener('click', () => {
            arregloMaterias.push(inputAddMateria.value);
            
            btnSaveMateria.style.display = 'none';
            btnEditMateria.style.display = 'flex';
        })

        btnEditMateria

        

        indiceAddMateria++;
    })

    btnSaveAlumno.addEventListener('click', () => {
        const alumno = new Alumno(inputNombreAlumno.value, inputApellidosAlumno.value, inputEdadAlumno.value)
    })
})