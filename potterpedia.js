const inputBuscador = document.getElementById ('buscador');

let estudiantes = [];

const cargarEstudiantes = async () => {

    try {

        const respuesta = await fetch('http://hp-api.herokuapp.com/api/characters/students');
        console.log(respuesta);

        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            let estudiantes = '';
            datos.forEach(estudiante => {
                console.log(estudiante);
                estudiantes += `<h1>${estudiante}</h1>`;
            });

        }else if (respuesta.status === 404) {
            console.log('La pagina no funciona');

        } else {
            console.log('Error desconocido');
        }

    } catch (error) {
        console.log(error);
    }
    
}



cargarEstudiantes();

inputBuscador.addEventListener('keyup', contenidoDelBuscador =>{
    let texto = contenidoDelBuscador.target.value;
    const filtrarEstudiantes = estudiantes.filter (estudiante => {
        return estudiante.name.contain(searchString)
    })
    console.log(filtrarEstudiantes);
})

