const USUARIOS = new Map();
USUARIOS.set("Saul","1234");

function logIn(){


    const USER_NAME = document.getElementById('username').value.trim();
    const PASSWORD = document.getElementById('password').value.trim();
    const ERROR = document.getElementById('error');

    if (USER_NAME === '' || PASSWORD === '') {
        ERROR.textContent = 'Ingresa tu usuario y/o contraseña.';
        
    }else if(USUARIOS.get(USER_NAME)!==PASSWORD){
        ERROR.textContent = 'Usuario y/o cotraseña incorrecta.';
    }else{
        ERROR.textContent = '';
        localStorage.setItem('user', USER_NAME);
        window.location.href = "home.html";
    }
    
}

