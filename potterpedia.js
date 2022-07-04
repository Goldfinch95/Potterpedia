const buscador = getElementById('buscador');


const cargarEstudiantes = async () => {
    try {
        const respuesta= await fetch('http://hp-api.herokuapp.com/api/characters/students');
        console.log(respuesta);
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            let estudiantes = ''
            datos.forEach(nombreDelEstudiante => {
                estudiantes += `<h1>${nombreDelEstudiante.name}</h1>`;
            });
            document.getElementById ('contenedorr').innerHTML = estudiantes
        } else if (respuesta.status === 404){
            console.log('La pagina no existe');
        } else{
            console.log('Error indefinido');
        }
    } catch (error) {
        console.log(error);
    }
    
}

cargarEstudiantes();

buscador.addEventListener("keyup")