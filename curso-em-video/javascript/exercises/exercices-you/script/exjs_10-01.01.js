function calcular() {
    txtv = document.querySelector("input#txtvel")  // id = # // name = . //
    res = document.querySelector("section#res")
    vel = parseInt(txtv.value)
    res.innerHTML = `<p>A sua velocidade é <strong>${vel}</strong>Km/h!</p>`
    if (vel > 80) {
    res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de viadagem,</p>`
    }
    res.innerHTML += `<p>Dirija sempre com sinto de segurança!</p>`
  }