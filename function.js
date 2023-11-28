
//creamos la variable de guardarContacto para que se almacene en el localstorage

const guardarContacto = (db,contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = 'file:///C:/Users/eduar/Desktop/Programaci%C3%B3n/VISUAL%20CODE/PracticaProyectos/segundo.proyecto/index.html' 
 }
const cargarContacto = (db,parentNode) =>{
  let claves=Object.keys(db)
  for (clave of claves){
    let contacto= JSON.parse(db.getItem(clave))
crearContacto(parentNode,contacto,db)
}
}

const crearContacto=(parentNode,contacto,db)=>{

    let divContacto=document.createElement('div')
    let nombreContacto=document.createElement('h3')
    let numeroContacto=document.createElement('p')
    let direccionContacto=document.createElement('p')
    let iconoBorrar=document.createElement('span')
    
    nombreContacto.innerHTML =  contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'delete'


    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-symbols-outlined','icono')

    iconoBorrar.onclick=()=>{
        db.removeItem(contacto.id)
        window.location.href='C:/Users/eduar/Desktop/Programaci%C3%B3n/VISUAL%20CODE/segundo.proyecto/index.html'
    }
    
       

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)

}



