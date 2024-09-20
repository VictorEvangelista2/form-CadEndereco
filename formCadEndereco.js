'use strict'; // ativa um modo restrito

// Código para consumo de API da ViaCEP

// https://viacep.com.br/

// Limpar consulta

const LimparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

// Verifica o cep
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho do cep
const cepValido = (cep) => cep.lenght == 8 && eNumero(cep);     


// Função para preencher os campos relacionados ao cep
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro; //Coloca o valor de logradouro da API dentro do campo do formulario
    document.getElementById('bairro').value = endereco.bairro;  // *
    document.getElementById('cidade').value = endereco.localidade; // *
    document.getElementById('uf').value = endereco.uf; // *
}