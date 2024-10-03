'use strict'; // Ativa o modo restrito
 
// codigo para consumo da via cep
//https://viacep.com.br/
 
// Limpar consulta do form ja realizada
const limparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
 
}
 
// verifica se o cep é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero); // Expressão regular
 
//verifica o tamanho do cep
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
 
//Função para preencher campos relacionados ao cep
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro; // Coloca o valor de logradouro da API dentro do campo do formulario
    document.getElementById('bairro').value = endereco.bairro;  // *;
    document.getElementById('cidade').value = endereco.localidade; // *;
    document.getElementById('uf').value = endereco.uf; // *.
}
 
// Função para consumo de API ViaCep
const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();
 
        console.log(addres);
 
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado')
        }else{
            preencherFormulario(addres)
        }
    }else{
        alert('CEP Incorreto');
    }
}
 
// Executa a ação de preenchimento do formulario ao deixar o campo do cep
document.getElementById('cep').addEventListener('focusout', pesquisarCep);