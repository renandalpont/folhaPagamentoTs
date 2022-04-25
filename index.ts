interface DadosUsuario {
  id: number;
  nome: string;
  email: string;
  cpf: number;
  dataNascimento: Date;
  endereco: Endereco;
}

interface Endereco {
  logradouro: string;
  numero: number;
  complemento: string
}

class Usuario {
  constructor() { }

  private dadosUsuario = {} as DadosUsuario;

  setId(novoId: number): void {
    this.dadosUsuario.id = novoId;
  }

  setNome(novoNome: string): void {
    this.dadosUsuario.nome = novoNome;
  }
  setEndereco(novoEndereco: Endereco): void {
    this.dadosUsuario.endereco = novoEndereco;
  }

  getDadosUsuario() {
    return this.dadosUsuario;
  }
  getEndereco() {
    return this.dadosUsuario.endereco;
  }
  getEnderecoNumero() {
    return this.dadosUsuario.endereco.numero;
  }
}


function index() {
  const allUsers = [];
  //const usuario1 = new Usuario();

  for (let i = 0; i < 10; i++) {
    let id = i + 1;
    const usuario = new Usuario();
    usuario.setNome("Nome completo " + id);
    usuario.setId(id);
    const endereco = {
      logradouro: "Nome da rua " + id,
      numero: id,
      complemento: "Complemento " + id,
    } as Endereco;

    usuario.setEndereco(endereco);
    allUsers.push(usuario);
  }

  //call back
  allUsers.forEach(usuario => console.log(usuario.getDadosUsuario()));

  /*allUsers.forEach(function (usuario) {
  console.log(usuario.getDadosUsuario());
  })
  */

  //allUsers.forEach(usuario => console.log(usuario.getEndereco()));

  for (let i = 0; i < allUsers.length; i++) {
    if ((i % 2) > 0) {
      allUsers[i].setEndereco({
        logradouro: "Novo nome rua",
      })
    } else {
      allUsers[i].setNome("Nome atualizado");
    }
  }
  allUsers.forEach(usuario => console.log(usuario.getDadosUsuario()));
}

index();
