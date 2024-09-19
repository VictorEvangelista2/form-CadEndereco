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
