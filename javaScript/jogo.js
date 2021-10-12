/* Esses excessos de comentarios são feitos para questões didaticas 
 Mas não é boa pratica em projetos reais 
*/

var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var criaMosquitoTempo = 1500;
var nivel = window.location.search;
// aqui limpa a url e pega somente o parametro do nivel
nivel = nivel.replace('?', '');

if (nivel === 'normal') {
    criaMosquitoTempo = 1500;
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000;
} else if (nivel === 'chuckNorris') {
    criaMosquitoTempo = 750;
}

function ajustaTamanhoTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}
ajustaTamanhoTela();

var cronometro = setInterval(function() {
    tempo -= 1;
    if (tempo < 0) {

        clearInterval(cronometro);
        clearInterval(mosquito);
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);

function posicaoRandomica() {
    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //console.log('elemento selecionado foi: v' + vidas)
        if (vidas > 3) {

            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 1 ? 0 : posicaoX
    posicaoY = posicaoY < 1 ? 0 : posicaoY


    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + olharMoscaAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        somTiro()
        mosquito.remove()
    }
    document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosca0';
        case 1:
            return 'mosca1';

        case 2:
            return 'mosca2';
    }
}

function olharMoscaAleatorio() {

    var classe = Math.floor(Math.random() * 2);
    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}

function somTiro() {
    var audio1 = new Audio();
    audio1.src = "imagens/tiroMeu.mp3";
    audio1.play();

}