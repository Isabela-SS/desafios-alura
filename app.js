let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function botaoConsole() {
    console.log('O botão foi clicado');
}

function botaoAlerta() {
    alert('Eu gosto de JS :)');
}

function botaoPrompt() {
    let cidade = prompt('Insira o nome de uma localidade qualquer');
    alert(`Estive em ${cidade} e lembrei de você <3`);
}

function botaoSoma() {
    let numero1 = parseFloat(prompt('Insira um número'));
    let numero2 = parseFloat(prompt('Insira mais um número'));
    let soma = numero1 + numero2;
    alert(`O resultado da soma destes dois números é ${soma}`);
}