//função para controlar o tamanho da tela 

var altura = 0
var largura= 0 
var vidas = 1
var tempo = 20

function aajustaTamanhoPalcojogo(){
   altura = window.innerHeight
   largura = window.innerWidth

   console.log(largura, altura)
}

aajustaTamanhoPalcojogo()

var cronometro = setInterval(function(){

    tempo-=1
    if(tempo <0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        alert('vitoria')

    } else{
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

// criando a posição randomica (modo de aparição da imagem aleatoriamente)
            //Math.floor = arredondamento do resultado(necessario encapsular a formula)

function posicaoRandomica(){

    //remover os mosquitos que ja apareceram apartir do momento que exista
    if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    if(vidas>3){
       window.location.href = 'fim_de_jogo.html'
    }
    else{
    document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'
    
    vidas++
}
    }

var posicaoX= Math.floor(Math.random() * largura) - 90
var posicaoY= Math.floor(Math.random() * altura) - 90

// operador ternario para evitar que o mosquito desapareça da tela

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

// criar o elemnto HTML detalhes do mosquito que vai aparecer

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
    this.remove()
}

document.body.appendChild(mosquito)

   
}



// CRIAR AS FUNÇÔES para o tamanho aleatorio

function tamanhoAleatorio(){
var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
   
    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }

}


