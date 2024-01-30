


function estação() {


    let mês = prompt("Digite o mês por extenso (Ex: Setembro)")
    let res = document.querySelector("section#res")
    let estação

    switch (mês.toUpperCase()) {


        case "JANEIRO": case "FEVEREIRO": case "MARÇO" || "MARCO":
            estação = "<strong>INVERNO</strong>"
      break
        case "ABRIL": case "MAIO": case "JUNHO":
            estação = "<strong>PRIMAVERA</strong>"
      break
        case "JULHO": case "AGOSTO": case "SETEMBRO":
            estação = "<strong>VERÃO</strong>"
      break
        case "OUTUBRO": case "NOVEMBRO": case "DEZEMBRO":
            estação = "<strong>OUTONO</strong>"
      break
        default:
            estação = "<strong>INDEFINIDA</strong>"
      break
    }

    res.innerHTML = `<h3>No mês de <strong>${mês}</strong>, a estação é ${estação}.</h3>`

}