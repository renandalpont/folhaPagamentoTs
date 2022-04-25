import { Console } from "console";

interface Funcionario {
  nome: String;
  salario: number;
  horasExtras: number;
  saldoPagamento: SaldoPagamento;
}
interface SaldoPagamento {
  salarioBruto: number;
  descontoInss: number;
  descontoIr: number;
}
//
class Funcionario {
  constructor() { };
  //
  private funcionario = {} as Funcionario;
  //
  setNome(novoNome: String): void {
    this.funcionario.nome = novoNome;
  }
  setSalario(novoSalario: number): void {
    this.funcionario.salario = novoSalario;
  }
  setHorasExtras(novoHorasExtras: number): void {
    this.funcionario.horasExtras = novoHorasExtras;
  }
  setSaldoPagamento(novoSaldoPagamento: SaldoPagamento): void {
    this.funcionario.saldoPagamento = novoSaldoPagamento;
  }
  //
  getFuncionario() {
    return this.funcionario;
  }
  getNome(): String {
    return this.funcionario.nome;
  }
  getSalario(): number {
    return this.funcionario.salario;
  }
  getHorasExtras(): number {
    return this.funcionario.horasExtras;
  }
  getSaldoPagamento() {
    return this.funcionario.saldoPagamento;
  }
  getSalarioBruto(): number {
    return this.funcionario.saldoPagamento.salarioBruto;
  }
  getDescontoInss(): number {
    return this.funcionario.saldoPagamento.descontoInss;
  }
  getDescontoIr(): number {
    return this.funcionario.saldoPagamento.descontoIr;
  }
}
function modelo(nome, salario, horasExtras) {

  const funcionario = new Funcionario();
  //
  funcionario.setNome(nome);
  funcionario.setSalario(salario);
  funcionario.setHorasExtras(horasExtras);
  const saldoPagamento = {
    salarioBruto: salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras())),
    descontoInss: valorDescontoInss(faixaDescontoInss(salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))), salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))),
    descontoIr: valorDescontoIr(salarioComDescontoInss(valorDescontoInss(faixaDescontoInss(salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))), salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))), salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))), faixaDescontoIr(salarioComDescontoInss(valorDescontoInss(faixaDescontoInss(salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))), salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))), salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras())))))
  } as SaldoPagamento;
  funcionario.setSaldoPagamento(saldoPagamento);
  //
  //RETORNA O VALOR DA HORA TRABALHADA DO FUNCIONÁRIO
  function valorHora(salario: number): number {
    const valorHora = salario / 200;
    return valorHora;
  }
  //
  //RETORNA O VALOR TOTAL DAS HORAS EXTRAS DO FUNCIONÁRIO
  function totalHorasExtras(valorHora: number, horasExtras: number): number {
    const totalHorasExtras = valorHora * horasExtras;
    return totalHorasExtras;
  }
  //
  //RETORNA O VALOR TOTAL DO SALÁRIO BRUTO DO FUNCIONÁRIO
  function salarioBruto(salario: number, totalHorasExtras: number): number {
    var salarioNumber: number = +salario;
    const salarioBruto = salarioNumber + totalHorasExtras;
    return salarioBruto;
  }
  //
  //RETORNA A FAIXA DE DESCONTO DO INSS EM QUE O FUNCIONÁRIO SE ENQUADRA
  function faixaDescontoInss(salarioBruto: number): number {
    let faixaDescontoInss = 0;
    if (salarioBruto <= 1212.0) {
      return faixaDescontoInss = 7.5;
    } else if (salarioBruto > 1212.0 && salarioBruto <= 2427.35) {
      return faixaDescontoInss = 9;
    } else if (salarioBruto > 2427.35 && salarioBruto <= 3641.03) {
      return faixaDescontoInss = 12;
    } else if (salarioBruto > 3641.03 && salarioBruto <= 7087.22) {
      return faixaDescontoInss = 14;
    }
  }
  //
  //RETORNA O VALOR A SER DESCONTADO REFERENTE AO INSS
  function valorDescontoInss(faixaDescontoInss: number, salarioBruto: number): number {
    const valorDescontoInss = salarioBruto * (faixaDescontoInss / 100);
    return valorDescontoInss;
  }
  //
  //RETORNA O VALOR DO SALÁRIO COM O DESCONTO DO INSS
  function salarioComDescontoInss(valorDescontoInss: number, salarioBruto: number): number {
    const salarioComDescontoInss = salarioBruto - valorDescontoInss;
    return salarioComDescontoInss;
  }
  //
  //RETORNA A FAIXA DE DESCONTO DO IR EM QUE O FUNCIONÁRIO SE ENQUADRA
  function faixaDescontoIr(salarioComDescontoInss: number): number {
    let faixaDescontoIr = 0;
    if (salarioComDescontoInss <= 1903.98) {
      return faixaDescontoIr;
    } else if (salarioComDescontoInss > 1903.98 && salarioComDescontoInss <= 2826.65) {
      return faixaDescontoIr = 7.5;
    } else if (salarioComDescontoInss > 2826.65 && salarioComDescontoInss <= 3751.05) {
      return faixaDescontoIr = 15;
    } else if (salarioComDescontoInss > 3751.05 && salarioComDescontoInss <= 4664.68) {
      return faixaDescontoIr = 22.5;
    } else {
      return faixaDescontoIr = 27.5;
    }
  }
  //
  //RETORNA O VALOR A SER DESCONTADO REFERENTE AO IR 
  function valorDescontoIr(salarioComDescontoInss: number, faixaDescontoIr: number): number {
    let valorDescontoIr = 0;
    let calculoDescontoValorPercentualIr = salarioComDescontoInss * faixaDescontoIr;
    if (faixaDescontoIr == 0) {
      return valorDescontoIr = 0;
    } else if (faixaDescontoIr == 7.5) {
      return valorDescontoIr = (salarioComDescontoInss * (faixaDescontoIr / 100)) - 142.8;
    } else if (faixaDescontoIr == 15) {
      return valorDescontoIr = (salarioComDescontoInss * (faixaDescontoIr / 100)) - 354.80;
    } else if (faixaDescontoIr == 22.5) {
      return valorDescontoIr = (salarioComDescontoInss * (faixaDescontoIr / 100)) - 636.13;
    } else {
      return valorDescontoIr = (salarioComDescontoInss * (faixaDescontoIr / 100)) - 869.36;
    }
  }


  console.log(funcionario.getFuncionario());
}
//
//
//modelo(process.argv[2], process.argv[3], process.argv[4]);
modelo("Lucas", 4000, 10);
