import { hpEstudiantes } from "./estudiantes.js";

const centro = document.getElementById('centro');
const formulario = document.getElementById ('buscador');
const resultados = document.getElementById('autocompletar');
const botonBuscar = document.getElementById ('buscar');
const cromo = document.getElementById ('cromo');
const imagenDelCromo = document.getElementById ('imagen');
const nombreDelEstudiante = document.getElementById ('nombre');
const datosdelCromo = document.getElementById ('datos');

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


const mostrarEstudiantes = (estudiante) => {
    const imagen = `<li><img src="${estudiante.image}"></img></li>`
    const nombre = `<ul>${estudiante.name}</ul>`
    const datos = `<ul>
    <h2>${estudiante.name}</h2>
    <p> Date of birth: ${estudiante.dateOfBirth}</p>
    <p> Hogwarts House: ${estudiante.house}</p>
    <p>Blood type: ${estudiante.ancestry}</p>
    <p>Wand: ${estudiante.wand.wood}, ${estudiante.wand.core}, ${estudiante.wand.length}</p>
    <p>Patronus: ${estudiante.patronus}</p>
    </ul>`

    imagenDelCromo.innerHTML = imagen;
    nombreDelEstudiante.innerHTML = nombre;
    datosdelCromo.innerHTML = datos;
};


//cargarEstudiantes();//

formulario.addEventListener('input', (mostrarCoincidencias) =>{
    const texto = formulario.value.toLowerCase();
    const filtrarEstudiantes = hpEstudiantes.filter ((estudiante)=>{
        return(
            estudiante.name.toLowerCase().includes(texto));
    })
    const mapearEstudiantes = filtrarEstudiantes.map(estudiante =>`<li>${estudiante.name}</li>`);
    resultados.innerHTML = mapearEstudiantes;
} );

botonBuscar.addEventListener('click', (buscar) =>{
    const texto = formulario.value.toLowerCase();
    if (texto.length > 0 && presionarBuscar == false) {
        const filtrarEstudiantes = hpEstudiantes.filter((estudiante) => {
        return (
            estudiante.name.toLowerCase().includes(texto));
        });
        resultados.style.display = 'flex';
        centro.style.display = 'none';
        cromo.style.display = 'flex';
        presionarBuscar = true;
        mostrarEstudiantes(filtrarEstudiantes[0]);
    }
    else{
        let noHayEstudiante = "no pusiste un estudiante";
        if(texto.length == 0){
            resultados.style.display = 'flex';
            resultados.innerHTML = noHayEstudiante;
        }
        else{
            resultados.style.display ='flex';
            centro.style.display = 'flex';
            cromo.style.display = 'none';
            presionarBuscar = false;}
    }
});
