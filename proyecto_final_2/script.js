/*
Estándar Bolwal:
    - Buttons: btnVerboNombre;
    - Input: btnPropiedadNombre;
    - Creamos elementos conforme la interfaz gráfica
    - Creamos grupos de tipo section e items de tipo div
*/

// Módulos
const nullMethod = () => {
  console.log("No hago nada");
};
const createBtnElement = (id, nombreElemento, clases, contenido, oCF) => {
  let myBtn = document.createElement("button");
  myBtn.setAttribute("id", `${nombreElemento}_${id}`);
  myBtn.innerHTML = `${contenido}`;

  clases.forEach((clase) => {
    myBtn.classList.add(`${clase}`);
  });

  myBtn.addEventListener("click", () => {
    oCF();
  });

  return myBtn;
};
const createInputElement = (id, nombreElemento, clases, placeholder, oCF) => {
  let myInput = document.createElement("input");
  myInput.setAttribute("id", `${id}${nombreElemento}`);
  myInput.setAttribute("placeholder", `${placeholder}`);

  clases.forEach((clase) => {
    myInput.classList.add(`${clase}`);
  });

  myInput.addEventListener("click", () => {
    oCF();
  });

  return myInput;
};
const createLabelElement = (
  id,
  nombreElemento,
  clases,
  contenido,
  forInput
) => {
  let myLabel = document.createElement("label");
  myLabel.setAttribute("id", `${id}${nombreElemento}`);
  myLabel.innerText = `${contenido}`;
  myLabel.setAttribute("for", `${forInput}`);

  clases.forEach((clase) => {
    myLabel.classList.add(`${clase}`);
  });

  return myLabel;
};

//Main
const main = () => {
  let controladorMaterias = 0;

  // Métodos
  const methodSaveAlumno = () => {
    console.log("Has guardado el alumo!");
  };
  const methodAddMateria = () => {
    console.log("Has añadido una materia!");
    let materiasSection = document.getElementById("materiasSection");
    let inputCreateMateria = createInputElement(
      `${controladorMaterias}`,
      "inputCreateMateria",
      ["inputCreateMateria", "primaryInput"],
      "Clase",
      nullMethod
    );
    let btnDeleteMateria = createBtnElement(
      `${controladorMaterias}`,
      "btnDeleteMateria",
      ["btnDeleteMateria", "deleteButton"],
      "Eliminar",
      methodDeleteMateria
    );

    materiasSection.appendChild(inputCreateMateria);
    materiasSection.appendChild(btnDeleteMateria);

    controladorMaterias = controladorMaterias + 1;
  };
  const methodDeleteMateria = () => {
    controladorMaterias = controladorMaterias - 1;
    
    let materiasSection = document.getElementById('materiasSection');
    materiasSection.removeChild(inputCreateMateria);
    materiasSection.removeChild(btnDeleteMateria);
  };

  //Get Elements
  let bodyPage = document.getElementById("bodyPage");
  let mainComponent = document.getElementById("mainComponent");

  //Create Elements
  let labelNombreAlumno = createLabelElement(
    "0",
    "labelNombreAlumno",
    ["labelNombre", "labelPrimary"],
    "Nombre",
    "inputNombre_0"
  );
  let inputNombreAlumno = createInputElement(
    "0",
    "inputNombreAlumno",
    ["inputNombre", "inputPrimary"],
    "Ayrton",
    nullMethod
  );
  let labelApellidoAlumno = createLabelElement(
    "0",
    "labelApellidoAlumno",
    ["labelApellido", "labelPrimary"],
    "Apellido",
    "inputApellido_0"
  );
  let inputApellidoAlumno = createInputElement(
    "0",
    "inputApellidoAlumno",
    ["inputApellido", "inputPrimary"],
    "Bolaños",
    nullMethod
  );
  let btnAddAlumno = createBtnElement(
    "0",
    "btnAddAlumno",
    ["btnAddAlumno", "btnPrimary"],
    "Añadir Alumno",
    methodSaveAlumno
  );
  let btnAddMateria = createBtnElement(
    "0",
    "btnAddMateria",
    ["btnAddMateria", "btnSecondary"],
    "Añadir Materia",
    methodAddMateria
  );

  mainComponent.appendChild(labelNombreAlumno);
  mainComponent.appendChild(inputNombreAlumno);
  mainComponent.appendChild(labelApellidoAlumno);
  mainComponent.appendChild(inputApellidoAlumno);
  mainComponent.appendChild(btnAddMateria);
  mainComponent.appendChild(btnAddAlumno);
};

main();

// Función que lanza al componente Añadir Alumno
/* const deployAddAlumnoComponent = () => {

    //Elemento
    let bodyPage = document.getElementById('bodyPage');

    let addAlumnoComponent = document.createElement('section');
    addAlumnoComponent.setAttribute('id', 'addAlumnoComponent');
    
    let titleComponent = document.createElement('h2');
    titleComponent.setAttribute('class', 'titleComponent');
    titleComponent.innerText = 'Añadir Alumno';
    
    let sectionNombre = document.createElement('div');
    sectionNombre.setAttribute('class', 'sectionNombre');
    let labelNombre = document.createElement('label');
    labelNombre.innerText = 'Nombre';
    let inputNombre = document.createElement('input');
    sectionNombre.appendChild(labelNombre);
    sectionNombre.appendChild(inputNombre);
    
    let sectionApellidos = document.createElement('div');
    sectionApellidos.setAttribute('class', 'sectionApellidos');
    let labelApellidos = document.createElement('label');
    labelApellidos.innerText = 'Apellidos';
    let inputApellidos = document.createElement('input');
    sectionApellidos.appendChild(labelApellidos);
    sectionApellidos.appendChild(inputApellidos);
    
    let sectionButtons = document.createElement('section');
    sectionButtons.setAttribute('class', 'sectionButtons');

    let sectionMaterias = document.createElement('section');
    sectionMaterias.setAttribute('id', 'sectionMaterias');
    let titleSectionMaterias = document.createElement('h3');
    titleSectionMaterias.setAttribute('class', 'titleSectionMaterias');
    titleSectionMaterias.innerText = 'Materias';
    let mensajeEstadoMaterias = document.createElement('p');
    mensajeEstadoMaterias.setAttribute('id', 'mensajeEstadoMaterias');
    mensajeEstadoMaterias.innerText = 'Sin materias...';
    sectionMaterias.appendChild(titleSectionMaterias);
    sectionMaterias.appendChild(mensajeEstadoMaterias);

    let btnAddMateria = document.createElement('button');
    btnAddMateria.setAttribute('id', 'btnAddMateria');
    btnAddMateria.setAttribute('class', 'primaryBtn')
    btnAddMateria.innerText = '+ Materia'
    let btnAddAlumno = document.createElement('button');
    btnAddAlumno.setAttribute('id', 'btnAddAlumno');
    btnAddAlumno.setAttribute('class', 'primaryBtn')
    btnAddAlumno.innerText = '+ Alumno';

    sectionButtons.appendChild(btnAddMateria);
    sectionButtons.appendChild(btnAddAlumno);

    addAlumnoComponent.appendChild(titleComponent);
    addAlumnoComponent.appendChild(sectionNombre);
    addAlumnoComponent.appendChild(sectionApellidos);
    addAlumnoComponent.appendChild(sectionMaterias);
    addAlumnoComponent.appendChild(sectionButtons);

    bodyPage.appendChild(addAlumnoComponent);
    
    let indice_materia = 0;
    let arregloMaterias = [];


    btnAddMateria.addEventListener('click', () => {
        let estado_materia = addMateriaSection(indice_materia);
        arregloMaterias.push(`${indice_materia}`);

        if(estado_materia.estado == true){
            arregloMaterias.splice(estado_materia.indice_materia, 1);
            indice_materia = indice_materia - 1;
            console.log(`Tamaño del arreglo ${arregloMaterias.length}; indice reconocido: ${indice_materia}`);
        }

        console.log(`Tamaño del arreglo ${arregloMaterias.length}; indice reconocido: ${indice_materia}`);
        indice_materia++;
    })
}


const addMateriaSection = (indice_materia) => {
    let sectionMaterias = document.getElementById('sectionMaterias');
    let mensajeEstadoMaterias = document.getElementById('mensajeEstadoMaterias');
    mensajeEstadoMaterias.style.display = 'none';
    let indiceEliminado = false;
    
    let itemMateria = document.createElement('div');
    itemMateria.setAttribute('class', 'itemMateria');


    let inputNombreMateria = document.createElement('input');
    inputNombreMateria.setAttribute('id', `inputNombreMateria_${indice_materia}`);
    inputNombreMateria.setAttribute('class', `inputNombreMateria`);

    let btnDeleteMateria = document.createElement('button');
    btnDeleteMateria.setAttribute('id', `btnDeleteMateria_${indice_materia}`);
    btnDeleteMateria.setAttribute('class', 'btnDeleteMateria');
    btnDeleteMateria.innerText = 'Eliminar';

    itemMateria.appendChild(inputNombreMateria);
    itemMateria.appendChild(btnDeleteMateria);

    sectionMaterias.appendChild(itemMateria);

    btnDeleteMateria.addEventListener('click', () => {
        mensajeEstadoMaterias.style.display = 'flex';
        indiceEliminado = true;
        sectionMaterias.removeChild(itemMateria);
    })

    if(indiceEliminado == true){
        return estado_materia = {'indice_materia': indice_materia, 'estado' : true};
    } else {
        return estado_materia = {'indice_materia': indice_materia, 'estado' : false};
    }

    
} */
