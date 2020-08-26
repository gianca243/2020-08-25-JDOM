function mensajeAlerta() {
    alert("omg hello")
}
function cajadeTexto() {
    var nombre = prompt('nombre:')
    document.write("<h1> tu name es "+nombre+"<h1>")
}
function confirmar() {
    var respuesta = confirm("esta seguro que desea eliminar el archivo")
    if (respuesta == true) {
        alert("archivo eliminado")
    } else {
        alert("archivo no eliminado")
    }
}
function consola(){
    console.log("omg omg omg")
}
var img = document.getElementById("imagenKirby")
img.addEventListener("dblclick",()=>{
    //alert("i'm DOM")
    img.style.width="1000px"
    img.style.border="5px solid black"
})

var box = document.getElementById("box")
box.addEventListener("mouseenter",()=>{
    box.classList.replace("box","cambio")
})
box.addEventListener("mouseleave",()=>{
    box.classList.replace("cambio","box")
})
box.addEventListener("mousemove",()=>{
    console.log("se mueve el mouse")
})
box.addEventListener("mouseup",()=>{
    console.log("se levanto el mouse")
})
box.addEventListener("mousedown",()=>{
    console.log("se bajo el mouse")
})
var teclado = document.getElementById("teclado")
teclado.addEventListener("keydown",()=>{
    console.log("se oprimio la tecla")
})
teclado.addEventListener("keypress",()=>{
    console.log("se sostiene la tecla")
})
teclado.addEventListener("keyup",(event)=>{
    console.log(event.key)
    if(event.key=="w" || event.key.toLowerCase()=="W"){
        console.log("va hacia adelante")
    }
})