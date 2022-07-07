
const barraDeBusqueda = document.getElementById ('buscador');
const listaDeEstudiantes = document.getElementById ('listaDeEstudiantes');
let hpEstudiantes = [];

const cargarEstudiantes = async () => {

    try {

        const respuesta = await fetch('http://hp-api.herokuapp.com/api/characters/students'); 
        console.log(respuesta);

        if (respuesta.status === 200) {
            hpEstudiantes = await respuesta.json();
            mostrarEstudiantes(hpEstudiantes);
            console.log(hpEstudiantes);

        }else if (respuesta.status === 404) {
            console.log('La pagina no funciona');

        } else {
            console.log('Error desconocido');
        }

    } catch (error) {
        console.log(error);
    }
    
}

/*const mostrarEstudiantes = (estudiantes) => {
    const cromo = estudiantes
        .map((estudiante) => {
            return `
            <li class="estudiante">
                <h2>${estudiante.name}</h2>
                <p>House: ${estudiante.house}</p>
                <p>Fecha de Nacimiento: ${estudiante.dateOfBirth}</p>
                <img src="${estudiante.image}"></img>
            </li>
        `;
        })
        .join('');
    listaDeEstudiantes.innerHTML = cromo;
};*/

cargarEstudiantes();

barraDeBusqueda.addEventListener ('keyup', (contenidoDeLaBarraDeBusqueda) => {
    const cadenaDeBusqueda = contenidoDeLaBarraDeBusqueda.target.value.toLowerCase();
    console.log(cadenaDeBusqueda);
    const filtrarEstudiantes = hpEstudiantes.filter((estudiante) => {
        return (
            estudiante.name.toLowerCase().includes(cadenaDeBusqueda)
            );
        });
    console.log(filtrarEstudiantes);
});


