let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");

let formularioEditar = document.getElementById("formularioEditar");
let nombreEditar = document.getElementById("nombreEditar");
let fechaEditar = document.getElementById("fechaEditar");
let descripcionEditar = document.getElementById("descripcionEditar");
let tercerP = document.getElementById("TercerP");
let TercerPEditar = document.getElementById("3PEditar");

let btnGuardar = document.getElementById("btnGuardar");
let listaTareas = document.getElementById("listaTareas");
let idTarea = document.getElementById("idTarea");

let tareas = [];

let agregarDatos = () => {
    tareas.push({
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        tercerP: tercerP.value
    });
    console.log(tareas);
};



let cerrarModal = () => { //"data-bs-dismiss" es lo que hace originalmente el boton cerrar en el codigo de html, y con esto se manipula desde js
    btnCerrar.setAttribute("data-bs-dismiss", "modal");
    btnCerrar.click();
    
}


let resetearFormulario = () => {
    formulario.reset();
};
let mostrarTareas = () => {
    listaTareas.innerHTML = "";

    tareas.forEach((tarea, indice) => { //For each es para mandar a llamar una funcion arrow
        listaTareas.innerHTML += `
    <div class='row' id=${indice}>
            <div class='col-2 border p-3 textoAlineado' style="background-color: #E5EAF0;">
                <strong>${tarea.nombre}</strong>
            </div>
            <div class='col-2 border p-3 textoAlineado' style="background-color: #E5EAF0;">
                <strong>${tarea.fecha}</strong>
            </div>
            <div class='col-2 border p-3 textoAlineado' style="background-color: #E5EAF0;">
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class='col-2 border p-3 textoAlineado' style="background-color: #E5EAF0;">
                <strong>${tarea.tercerP}</strong>
            </div>
            <div class='col-2 border p-3 text-center' style="background-color: #E5EAF0;">
                    <button class='btn btn-success' onClick ="editarTarea(${indice});" 
                    data-bs-toggle="modal" data-bs-target="#exampleModalEditar" style="background-color: #97ABC3;"><i class="bi bi-pencil"></i>Edit Grade</button>
                </div>
            <div class='col-2 border p-3 text-center' style="background-color: #E5EAF0;">
                <button class='btn btn-success' onClick ="borrarTarea(this,${indice});" style="background-color: #416788;">
                <i class="bi bi-trash"></i>Delete Grade</button>
            </div> 
    </div> 
            `;

        


    });



}
formulario.addEventListener("submit", (e) => { 
    e.preventDefault();
    agregarDatos();
    
    resetearFormulario();
    mostrarTareas();
    cerrarModal();
});


let borrarTarea = (boton, indice) => {
    if (confirm("¿Esta seguro de querer eliminar esta tarea?")) //"Confirm": Funcion de JavaScript usada para confirar una decision en el navegador con una ventana "Pop Up"
    {
        boton.parentElement.parentElement.remove(); //Esta funcion hace que se elimine el padre del padre del elemento deseado
        tareas.splice(indice, 1);
        window.alert("Tarea Eliminada");
    }
}

let editarTarea = (indice) => { //Se trae el formulario y el indice del html escrito en el JavaScript
    nombreEditar.value = tareas[indice].nombre;
    fechaEditar.value = tareas[indice].fecha;
    descripcionEditar.value = tareas[indice].descripcion;
    TercerPEditar.value = tareas[indice].tercerP;
    console.log(indice);
    idTarea.value = indice;
}
let cerrarModalEditar = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
    btnGuardarEditar.click();
}

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    let indice = idTarea.value;
    tareas[indice].nombre = nombreEditar.value;
    tareas[indice].fecha = fechaEditar.value;
    tareas[indice].descripcion = descripcionEditar.value;
    tareas[indice].tercerP = TercerPEditar.value;
    mostrarTareas();
    cerrarModalEditar();
    window.alert("Tarea Editada");
});