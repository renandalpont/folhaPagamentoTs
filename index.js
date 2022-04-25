var Usuario = /** @class */ (function () {
    function Usuario() {
        this.dadosUsuario = {};
    }
    Usuario.prototype.setId = function (novoId) {
        this.dadosUsuario.id = novoId;
    };
    Usuario.prototype.setNome = function (novoNome) {
        this.dadosUsuario.nome = novoNome;
    };
    Usuario.prototype.setEndereco = function (novoEndereco) {
        this.dadosUsuario.endereco = novoEndereco;
    };
    Usuario.prototype.getDadosUsuario = function () {
        return this.dadosUsuario;
    };
    Usuario.prototype.getEndereco = function () {
        return this.dadosUsuario.endereco;
    };
    Usuario.prototype.getEnderecoNumero = function () {
        return this.dadosUsuario.endereco.numero;
    };
    return Usuario;
}());
function index() {
    var allUsers = [];
    //const usuario1 = new Usuario();
    for (var i = 0; i < 10; i++) {
        var id = i + 1;
        var usuario = new Usuario();
        usuario.setNome("Nome completo " + id);
        usuario.setId(id);
        var endereco = {
            logradouro: "Nome da rua " + id,
            numero: id,
            complemento: "Complemento " + id
        };
        usuario.setEndereco(endereco);
        allUsers.push(usuario);
    }
    //call back
    allUsers.forEach(function (usuario) { return console.log(usuario.getDadosUsuario()); });
    /*allUsers.forEach(function (usuario) {
    console.log(usuario.getDadosUsuario());
    })
    */
    //allUsers.forEach(usuario => console.log(usuario.getEndereco()));
    for (var i = 0; i < allUsers.length; i++) {
        if ((i % 2) > 0) {
            allUsers[i].setEndereco({
                logradouro: "Novo nome rua"
            });
        }
        else {
            allUsers[i].setNome("Nome atualizado");
        }
    }
    allUsers.forEach(function (usuario) { return console.log(usuario.getDadosUsuario()); });
}
index();
