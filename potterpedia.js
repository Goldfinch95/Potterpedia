const cargarPersonajes =async()=>{
    const estudiantes = await fetch("http://hp-api.herokuapp.com/api/characters/students")
    console.log(estudiantes);
}


cargarPersonajes()
