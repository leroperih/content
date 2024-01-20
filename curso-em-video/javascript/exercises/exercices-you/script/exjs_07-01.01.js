function media() {
    nome = prompt("Qual é o nome do(a) estudante?")
    not1 = Number(prompt(`Qual foi a primeira nota tirada por:\n${nome}?`))
    not2 = Number(prompt(`Além da nota ${not1}, qual foi a outra nota tirada por:\n${nome}`))


    medi = (not1 + not2) / 2

    res = document.querySelector("section#res")
    res.innerHTML = `<p>Calculando a média final de <strong>${nome}</strong>.</p><br>`
    res.innerHTML += `<p>As notas obtidas foram: <strong>${not1}</strong> e <strong>${not2}</strong>.</p>`
    res.innerHTML += `<p>A média final será <strong>${medi}</strong>!</p>`
  }