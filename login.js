const loadItens = require ('./cadastro.js');
var cpf = document.getElementById('cpf').value;
var senha = document.getElementById('senha').value;
let botao = document.getElementById('botao');
let validacao = false

function logar() {
    if(cpf !== "1" && senha !== "1"){
        alert('Sucesso');
        location.href= "home.html";
    } else {
        alert('Usuário ou senha incorreta');
    }
}
