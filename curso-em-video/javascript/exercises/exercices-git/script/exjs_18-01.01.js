let res = document.querySelector("section#res")
let computador = 0
let jogador = 0
let numClick = 0


function sortear() {


    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)

}

function jogar() {

    
    jogador = Number(window.prompt("Qual é o seu palpite?"))
    numClick = numClick + 1


    if (jogador < computador) {


        res.innerHTML = `<h3>O seu adivinhou o número ${jogador}.\nO meu número é <strong>MAIOR</strong> que isso!</h3>`

    } else if (jogador > computador) {


        res.innerHTML = `<h3>O seu adivinhou o número ${jogador}.\nO meu número é <strong>MENOR</strong> que isso!</h3>`

    } else if (jogador == computador) {


        res.innerHTML = `<h3><strong>Parabéns!</strong> Você adivinhou o número sorteado!<br>O número sorteado era <strong>${computador}</strong> e você o adivinhou em <strong>${numClick}</strong> tentativas!</h3>`
        document.querySelector("button#reload").style.display = 'inline-block'

    }

}

function reload() {


    window.location.reload()

}