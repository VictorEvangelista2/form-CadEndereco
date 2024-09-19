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