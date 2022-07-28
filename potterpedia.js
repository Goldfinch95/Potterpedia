import { hpEstudiantes } from "./estudiantes.js";

const elInput = document.querySelector ("#buscador-input");
const elBotonBuscar = document.querySelector ("#btn-enviar");

let nombreDeLosEstudiantes = [];
let presionarBuscar = false;

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

const buscarEstudiante = () => {
    const valor = elInput.value.toLowerCase();
    if(valor.lenght > 0 && )
}

obtenerEstudiantes();

elInput.addEventListener("input", EntradaDeTexto);

elBotonBuscar.addEventListener ("click",buscarEstudiante);


