function Datos(props){
    const {nombre,edad}=props.alumno;
    const {nombrecarrera,anio}=props.carrera;
    return(
        <div class='hola'>
            <h1>Datos estudiante </h1>
            <h2>Nombre: {nombre}</h2>
            <h2>Edad: {edad}</h2>
            <h2>Carrera: {nombrecarrera}</h2>
            <h2>Año: {anio}</h2>
        </div>
    )
}
export default Datos;