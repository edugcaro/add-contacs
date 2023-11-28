const nombre= document.querySelector('.nombre')
const numero= document.querySelector('.numero')
const direccion= document.querySelector('.direccion')
const agregarTarea= document.querySelector('.agregar-tarea')

const listadoTareas=document.querySelector('.listado-tareas')


const db=window.localStorage

//creeamos la funcion para que al darle click al botón,
//guarde todo esto como un objeto para almacenarlo dentro del localstorage


agregarTarea.onclick = ()  => {
    let contacto = {
        id: Math.random(1,100),
        nombre:nombre.value,
        numero:numero.value,
        direccion:direccion.value,
    }
    guardarContacto(db,contacto)
}

cargarContacto(db,listadoTareas)