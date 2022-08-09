import { hpEstudiantes } from "./estudiantes.js";

const centro = document.querySelector("#centro");
const elInput = document.querySelector ("#buscador-input");
const elBotonBuscar = document.querySelector ("#btn-enviar");
const elBotonVolver = document.querySelector("#btn-volver");
const elCromo = document.querySelector ("#cromo");
const elImagen = document.querySelector ("#imagen");
const elNombre = document.querySelector ("#nombre");
const eldatos = document.querySelector ("#datos");


let nombreDeLosEstudiantes = [];
let presionarBuscar = false;

elBotonVolver.style.display ="none";

let presionarVolver = false;

const obtenerEstudiantes = () => {
    const data = hpEstudiantes;

    nombreDeLosEstudiantes = data.map((estudiante) => {
        return estudiante.name;
    });
}

const EntradaDeTexto = () => {
    removerListaAutodesplegable();

    const valor = elInput.value.toLowerCase();

    if(valor.length === 0) return;

    const nombresFiltrados = [];
    
    nombreDeLosEstudiantes.forEach((nombreDelEstudiante) => {
        if (nombreDelEstudiante.substring(0, valor.length).toLowerCase() === valor)
        nombresFiltrados.push(nombreDelEstudiante);
    });

    listaAutodesplegable(nombresFiltrados);
}

const listaAutodesplegable = (lista) => {
    const elLista = document.createElement("ul");
    elLista.className = "buscador-lista";
    elLista.id = "buscador-lista";

    lista.forEach((nombreDelEstudiante) => {
        const itemLista = document.createElement("li");

        const botonEstudiante = document.createElement("button");
        botonEstudiante.innerHTML = nombreDelEstudiante;
        botonEstudiante.addEventListener("click", clickEnElBotonEstudiante )
        itemLista.appendChild(botonEstudiante);

        elLista.appendChild(itemLista);
    });

    document.querySelector("#contenedor-buscador").appendChild(elLista);
}

const removerListaAutodesplegable = () => {
    const elLista = document.querySelector("#buscador-lista");
    if(elLista) elLista.remove();
}

const clickEnElBotonEstudiante = (e) =>{
    e.preventDefault();

    const elBoton = e.target;
    elInput.value = elBoton.innerHTML;

    removerListaAutodesplegable();
}

const mostrarCromo = (estudiante) => {
    const imagen = `<ul><img src="${estudiante.image}"></img></ul>`
    const nombre = `<ul>${estudiante.name}</ul>`
    const datos = `<ul>
    <h2>${estudiante.name}</h2>
    <p> Date of birth: ${estudiante.dateOfBirth}</p>
    <p> Hogwarts House: ${estudiante.house}</p>
    <p>Blood type: ${estudiante.ancestry}</p>
    <p>Wand: ${estudiante.wand.wood}, ${estudiante.wand.core}, ${estudiante.wand.length}</p>
    <p>Patronus: ${estudiante.patronus}</p>
    </ul>`

    elImagen.innerHTML = imagen;
    elNombre.innerHTML = nombre;
    eldatos.innerHTML = datos;
}

const buscarEstudiante = () => {
    const valor = elInput.value.toLowerCase();
    if (valor.length > 0 && presionarBuscar == false) {
        const filtrarEstudiantes = hpEstudiantes.filter((estudiante) => {
            return (
                estudiante.name.toLowerCase().includes(valor));
        });
        centro.style.display = "none";
        elBotonVolver.style.display = "flex";
        elCromo.style.display = "flex";
        presionarBuscar = true;
        mostrarCromo(filtrarEstudiantes[0]);
    }
    else{
        centro.style.display = "flex";
        elCromo.style.display = "none";
        presionarBuscar = false;
    }
}

const volverAlPrincipio = () => {
    if(presionarVolver == false) {
        centro.style.display = "flex";
        elBotonVolver.style.display = "none";
        elCromo.style.display = "none";
        presionarVolver = true;
        document.getElementById("buscador-input").value = '';
    }
    else {
        centro.style.display = "none";
        elCromo.style.display = "flex";
        presionarVolver = false;
    }
}

obtenerEstudiantes();

elInput.addEventListener("input", EntradaDeTexto);

elBotonBuscar.addEventListener ("click", buscarEstudiante);

elBotonVolver.addEventListener("click", volverAlPrincipio);

