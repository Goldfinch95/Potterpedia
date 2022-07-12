import { hpEstudiantes } from "./estudiantes.js";

const centro = document.getElementById('centro');
const cromo = document.getElementById ('cromo')
const formulario = document.getElementById ('buscador');
const botonBuscar = document.getElementById ('buscar');
const listaDeEstudiantes = document.getElementById ('listaDeEstudiantes');

let presionarBuscar = false;

/*const cargarEstudiantes = async () => {

    try {

        const respuesta = await fetch('http://hp-api.herokuapp.com/api/characters/students'); 
        console.log(respuesta);

        if (respuesta.status === 200) {
            hpEstudiantes = await respuesta.json();//armar un archivo datos.json para copiar y pegar los datos de la api
            console.log(hpEstudiantes);

        }else if (respuesta.status === 404) {
            console.log('La pagina no funciona');

        } else {
            console.log('Error desconocido');
        }

    } catch (error) {
        console.log(error);
    }
    
}*/

/*const mostrarEstudiantes = (estudiante) => {
    const cromo = 
    `<li class="estudiante">
    <h2>${estudiante.name}</h2>
    <p>House: ${estudiante.house}</p>
    <p>Fecha de Nacimiento: ${estudiante.dateOfBirth}</p>
    <img src="${estudiante.image}"></img>
    </li>`
    listaDeEstudiantes.innerHTML = cromo;
};*/

//cargarEstudiantes();//

botonBuscar.addEventListener('click', (buscar) =>{
    const texto = formulario.value.toLowerCase();
    const filtrarEstudiantes = hpEstudiantes.filter((estudiante) => {
        return (
            estudiante.name.toLowerCase().includes(texto));
        });
    console.log(filtrarEstudiantes);
    if (presionarBuscar == false){
        centro.style.display = 'none';
        cromo.style.display = 'flex';
        presionarBuscar = true;
        mostrarEstudiantes(filtrarEstudiantes[0]);
    }
    else{
        centro.style.display = 'flex';
        cromo.style.display = 'none';
        presionarBuscar = false;
    }
});