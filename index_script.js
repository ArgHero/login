class Usuario {
    constructor(name, nickname, password, photo) {
        this.name = name;
        this.nickname = nickname;
        this.password = password;
        this.photo = photo;
    }
}
let usuarios = [];
usuarios.push(new Usuario("Saul Hernandez", "SaulH", "1234", "https://i.pinimg.com/736x/f0/3d/e7/f03de7d4b81fe7b9ce81b5e0c77851a4.jpg"));
usuarios.push(new Usuario("Juan Perez", "JuanP", "1234", "https://i.pinimg.com/736x/5b/fd/e1/5bfde1a35b500a3420623aa426828bbd.jpg"));
usuarios.push(new Usuario("Maria Lopez", "MaryL", "1234", "https://i.pinimg.com/736x/de/a2/da/dea2dacfaddd5c6333977d95bb8b5cd5.jpg"));
usuarios.push(new Usuario("Pedro Ramirez", "PeteR", "1234", "https://i.pinimg.com/736x/8c/9b/07/8c9b07e5f25b7776190bf9de4da60c47.jpg"));
usuarios.push(new Usuario("Ana Garcia", "AnaG", "1234", "https://i.pinimg.com/736x/35/9a/c9/359ac9da2cd64de80476bd7f10f78e13.jpg"));
usuarios.push(new Usuario("Jose Rodriguez", "JoseR", "1234", "https://i.pinimg.com/736x/5f/0a/38/5f0a388329af2a02c790575b23c85781.jpg"));
usuarios.push(new Usuario("Luisa Martinez", "LuisaM", "1234", "https://i.pinimg.com/736x/dc/f6/a1/dcf6a17ccc94b6ef5018122eec81106d.jpg"));

function logIn(){
    const USER_NAME = document.getElementById('username').value.trim();
    const PASSWORD = document.getElementById('password').value.trim();
    const ERROR = document.getElementById('error');
    const USER_FIND = usuarios.find(user => user.nickname === USER_NAME && user.password === PASSWORD);

    if (USER_NAME === '' || PASSWORD === '') {
        ERROR.textContent = 'Ingresa tu usuario y/o contraseña.';
    }else if(!USER_FIND){
        ERROR.textContent = 'Usuario y/o cotraseña incorrecta.';
    }else{
        ERROR.textContent = '';
        localStorage.setItem('loggedUser', JSON.stringify(USER_FIND));
        window.location.href = "home.html";
    }
}

