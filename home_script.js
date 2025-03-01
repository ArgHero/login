const USER = JSON.parse(localStorage.getItem('loggedUser'));
class Comentario{
    constructor(usuario, fecha, cuerpo, foto){
        this.usuario = usuario;
        this.fecha = fecha;
        this.cuerpo = cuerpo;
        this.foto = foto;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    if (USER) {
        document.getElementById('user-img').src = USER.photo;
        document.getElementById('user-name').textContent = USER.name;
        moment.locale('es'); // Coloca la fecha en español
        cargarComentarios();

    }else
        window.location.href = "index.html";
});

function eliminarComentario(event) {
    let comentario = event.target.parentElement;
    let usuario = comentario.querySelector('.usuario').textContent;

    if (usuario !== USER.nickname) {
        return;
    }

    let historial = JSON.parse(localStorage.getItem('historial')) || [];
    let fecha = comentario.querySelector('.fecha').textContent;
    let cuerpo = comentario.querySelector('.cuerpo').textContent;

    historial = historial.filter(item => 
        item.usuario !== usuario || 
        moment(item.fecha).fromNow() !== fecha || 
        item.cuerpo !== cuerpo
    );

    localStorage.setItem('historial', JSON.stringify(historial));
    comentario.remove();
}

function cargarComentarios(){
    let historial = JSON.parse(localStorage.getItem('historial')) || [];
    let cajaComentarios = document.getElementById('comentarios');
    historial.forEach(comentario => {
        cajaComentarios.appendChild(comentarioContainer(comentario));
    });
    cajaComentarios.scrollTop = cajaComentarios.scrollHeight;
}

function publicarComentario(){
    let  entrada = document.getElementById("areaTexto").value.trim();
    if ( entrada != '') {
        let comentario = new Comentario(USER.nickname,Date.now(), entrada, USER.photo);
        
        let historial = JSON.parse(localStorage.getItem('historial')) || [];//Comentarios previamente publicados
        historial.push(comentario);
        localStorage.setItem('historial', JSON.stringify(historial));

        let cajaComentarios = document.getElementById('comentarios');
        cajaComentarios.appendChild(comentarioContainer(comentario));
        cajaComentarios.scrollTop = cajaComentarios.scrollHeight;
        document.getElementById("areaTexto").value = '';
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

function comentarioContainer(comentario) {
    let comentario_container = document.getElementById("comentarioTemplate").content.cloneNode(true);
    comentario_container.querySelector("img").src = comentario.foto;
    comentario_container.querySelector(".usuario").textContent = comentario.usuario;
    comentario_container.querySelector(".fecha").textContent = moment(comentario.fecha).fromNow();
    comentario_container.querySelector(".cuerpo").textContent = comentario.cuerpo;

    if (comentario.usuario === USER.nickname) {
        comentario_container.querySelector(".borrar").style.display = "block";
    } else {
        comentario_container.querySelector(".borrar").style.display = "none";
    }

    return comentario_container;
}
