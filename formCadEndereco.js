'use strict';

// Função para verificar se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);

// Verifica o tamanho do CEP
const cepValido = (cep) => cep.length === 8 && eNumero(cep);

// Função para preencher os campos do formulário
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
};

// Função para limpar os campos do formulário
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
};

// Função para consumir a API ViaCEP
const pesquisarCep = async () => {
    const cep = document.getElementById('cep').value; // Obtém o valor do CEP do input

    if (cepValido(cep)) {
        const url = `http://viacep.com.br/ws/${cep}/json/`;
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.erro) {
                alert('CEP não encontrado');
            } else {
                preencherFormulario(data);
            }
        } catch (error) {
            console.error('Erro ao consultar o CEP:', error);
            alert('Ocorreu um erro ao buscar o CEP. Tente novamente.');
        }
    } else {
        alert('CEP inválido');
    }
};

// Associa a função pesquisarCep ao evento 'focusout' do campo CEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep);