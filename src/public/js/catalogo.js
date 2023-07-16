const producto = id=>{
    location.href = "/producto/"+id;
}


const btn = document.getElementById("btnForm");
btn.addEventListener("click",()=>{
    const id = document.getElementById("formulario")["CategoriaID"].value
    location.href = "/catalogo/"+id;
})