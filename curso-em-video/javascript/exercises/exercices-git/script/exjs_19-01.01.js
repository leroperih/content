function calcular() {


    let num01 = Number(prompt("Digite o primeiro valor."))
    let num02 = Number(prompt("Digite o segundo valor."))
    let opcao = Number(prompt(`Os valores informados foram ${num01} e ${num02}.\nO que deseja fazer com os valores?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`))


    res = document.querySelector("section#res")
    res.innerHTML = `<h3>Calculando...</h3><br>`


    switch (opcao) {


        case 1:
            res.innerHTML += `<p>${num01} + ${num02} = <strong>${num01 + num02}</strong></p>`
      break
        case 2:
            res.innerHTML += `<p>${num01} - ${num02} = <strong>${num01 - num02}</strong></p>`
      break
        case 3:
            res.innerHTML += `<p>${num01} × ${num02} = <strong>${num01 * num02}</strong></p>`
      break
        case 4:
            res.innerHTML += `<p>${num01} ÷ ${num02} = <strong>${num01 / num02}</strong></p>`
      break
    }
}