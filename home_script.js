var usuario = new Object();
usuario.nombre = "Saul Hernandez";
usuario.URLfoto = "https://i.pinimg.com/736x/26/a9/7d/26a97dc2775ad59e85a1cf906063a9e8.jpg";
var acumuladorClicks = 0;

function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}
function alerta(){
    alert("No hace nada. 🙂‍↕️");
}
function eliminarComentario(event) {
    event.target.parentElement.remove();
}
function publicarComentario(){
    let  entrada = document.getElementById("areaTexto").value;
    if ( entrada != '' && entrada != /s+/) {
        let comentario = document.getElementById("comentarioTemplate").content.cloneNode(true);
        comentario.querySelector("img").src=usuario.URLfoto;
        comentario.querySelector(".usuario").textContent = usuario.nombre;
        comentario.querySelector(".fecha").textContent = moment().subtract(0, 'days').calendar();
        comentario.querySelector(".cuerpo").textContent = document.getElementById("areaTexto").value;
        document.getElementById("areaTexto").value = '';
        let cajaComentarios = document.getElementById('comentarios');
        cajaComentarios.appendChild(comentario);
        cajaComentarios.scrollTop = cajaComentarios.scrollHeight;
    }
}
document.getElementById('ingresarComentario').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        publicarComentario();
    }
});

document.getElementById('ingresarComentario').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById("areaTexto").value = '';
    }
});