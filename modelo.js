"use strict";
exports.__esModule = true;
//
var Funcionario = /** @class */ (function () {
    function Funcionario() {
        //
        this.funcionario = {};
    }
    ;
    //
    Funcionario.prototype.setNome = function (novoNome) {
        this.funcionario.nome = novoNome;
    };
    Funcionario.prototype.setSalario = function (novoSalario) {
        this.funcionario.salario = novoSalario;
    };
    Funcionario.prototype.setHorasExtras = function (novoHorasExtras) {
        this.funcionario.horasExtras = novoHorasExtras;
    };
    Funcionario.prototype.setSaldoPagamento = function (novoSaldoPagamento) {
        this.funcionario.saldoPagamento = novoSaldoPagamento;
    };
    //
    Funcionario.prototype.getFuncionario = function () {
        return this.funcionario;
    };
    Funcionario.prototype.getNome = function () {
        return this.funcionario.nome;
    };
    Funcionario.prototype.getSalario = function () {
        return this.funcionario.salario;
    };
    Funcionario.prototype.getHorasExtras = function () {
        return this.funcionario.horasExtras;
    };
    Funcionario.prototype.getSaldoPagamento = function () {
        return this.funcionario.saldoPagamento;
    };
    Funcionario.prototype.getSalarioBruto = function () {
        return this.funcionario.saldoPagamento.salarioBruto;
    };
    Funcionario.prototype.getDescontoInss = function () {
        return this.funcionario.saldoPagamento.descontoInss;
    };
    Funcionario.prototype.getDescontoIr = function () {
        return this.funcionario.saldoPagamento.descontoIr;
    };
    return Funcionario;
}());
function modelo(nome, salario, horasExtras) {
    var funcionario = new Funcionario();
    //
    funcionario.setNome(nome);
    funcionario.setSalario(salario);
    funcionario.setHorasExtras(horasExtras);
    var saldoPagamento = {
        salarioBruto: salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras())),
        descontoInss: valorDescontoInss(faixaDescontoInss(salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))), salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))),
        descontoIr: valorDescontoIr(salarioComDescontoInss(valorDescontoInss(faixaDescontoInss(salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))), salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))), salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))), faixaDescontoIr(salarioComDescontoInss(valorDescontoInss(faixaDescontoInss(salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))), salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras()))), salarioBruto(funcionario.getSalario(), totalHorasExtras(valorHora(funcionario.getSalario()), funcionario.getHorasExtras())))))
    };
    funcionario.setSaldoPagamento(saldoPagamento);
    //
    //RETORNA O VALOR DA HORA TRABALHADA DO FUNCIONÁRIO
    function valorHora(salario) {
        var valorHora = salario / 200;
        return valorHora;
    }
    //
    //RETORNA O VALOR TOTAL DAS HORAS EXTRAS DO FUNCIONÁRIO
    function totalHorasExtras(valorHora, horasExtras) {
        var totalHorasExtras = valorHora * horasExtras;
        return totalHorasExtras;
    }
    //
    //RETORNA O VALOR TOTAL DO SALÁRIO BRUTO DO FUNCIONÁRIO
    function salarioBruto(salario, totalHorasExtras) {
        var salarioNumber = +salario;
        var salarioBruto = salarioNumber + totalHorasExtras;
        return salarioBruto;
    }
    //
    //RETORNA A FAIXA DE DESCONTO DO INSS EM QUE O FUNCIONÁRIO SE ENQUADRA
    function faixaDescontoInss(salarioBruto) {
        var faixaDescontoInss = 0;
        if (salarioBruto <= 1212.0) {
            return faixaDescontoInss = 7.5;
        }
        else if (salarioBruto > 1212.0 && salarioBruto <= 2427.35) {
            return faixaDescontoInss = 9;
        }
        else if (salarioBruto > 2427.35 && salarioBruto <= 3641.03) {
            return faixaDescontoInss = 12;
        }
        else if (salarioBruto > 3641.03 && salarioBruto <= 7087.22) {
            return faixaDescontoInss = 14;
        }
    }
    //
    //RETORNA O VALOR A SER DESCONTADO REFERENTE AO INSS
    function valorDescontoInss(faixaDescontoInss, salarioBruto) {
        var valorDescontoInss = salarioBruto * (faixaDescontoInss / 100);
        return valorDescontoInss;
    }
    //
    //RETORNA O VALOR DO SALÁRIO COM O DESCONTO DO INSS
    function salarioComDescontoInss(valorDescontoInss, salarioBruto) {
        var salarioComDescontoInss = salarioBruto - valorDescontoInss;
        return salarioComDescontoInss;
    }
    //
    //RETORNA A FAIXA DE DESCONTO DO IR EM QUE O FUNCIONÁRIO SE ENQUADRA
    function faixaDescontoIr(salarioComDescontoInss) {
        var faixaDescontoIr = 0;
        if (salarioComDescontoInss <= 1903.98) {
            return faixaDescontoIr;
        }
        else if (salarioComDescontoInss > 1903.98 && salarioComDescontoInss <= 2826.65) {
            return faixaDescontoIr = 7.5;
        }
        else if (salarioComDescontoInss > 2826.65 && salarioComDescontoInss <= 3751.05) {
            return faixaDescontoIr = 15;
        }
        else if (salarioComDescontoInss > 3751.05 && salarioComDescontoInss <= 4664.68) {
            return faixaDescontoIr = 22.5;
        }
        else {
            return faixaDescontoIr = 27.5;
        }
    }
    //
    //RETORNA O VALOR A SER DESCONTADO REFERENTE AO IR 
    function valorDescontoIr(salarioComDescontoInss, faixaDescontoIr) {
        var valorDescontoIr = 0;
        var calculoDescontoValorPercentualIr = salarioComDescontoInss * faixaDescontoIr;
        if (faixaDescontoIr == 0) {
            return valorDescontoIr = 0;
        }
        else if (faixaDescontoIr == 7.5) {
            return valorDescontoIr = (salarioComDescontoInss * (faixaDescontoIr / 100)) - 142.8;
        }
        else if (faixaDescontoIr == 15) {
            return valorDescontoIr = (salarioComDescontoInss * (faixaDescontoIr / 100)) - 354.80;
        }
        else if (faixaDescontoIr == 22.5) {
            return valorDescontoIr = (salarioComDescontoInss * (faixaDescontoIr / 100)) - 636.13;
        }
        else {
            return valorDescontoIr = (salarioComDescontoInss * (faixaDescontoIr / 100)) - 869.36;
        }
    }
    console.log(funcionario.getFuncionario());
}
//
//
//modelo(process.argv[2], process.argv[3], process.argv[4]);
modelo("Lucas", 4000, 10);
