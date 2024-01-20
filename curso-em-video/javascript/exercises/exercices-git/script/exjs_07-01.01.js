function media() {

  aluNome = prompt("Qual é o nome do(a) aluno(a)?")
  if (aluNome == "" || aluNome == null) {
    alert("O nome é inválido.\nO nome passa a ser Flavinho.")
    aluNome = "Flavinho"
  }
  aluNot1 = Number(prompt(`Qual foi a primeira nota tirada por ${aluNome}?`))
  aluNot2 = Number(prompt(`Além da nota ${aluNot1}, qual foi a outra nota tirada por ${aluNome}?`))

  aluMedia = (aluNot1 + aluNot2) / 2

  res = document.querySelector("section#res")
  res.innerHTML = `<h3>Calculando a média final de ${aluNome}.</h3><br>`
  res.innerHTML += `<p>As notas obtidas pelo(a) aluno(a) ${aluNome} foram ${aluNot1} e ${aluNot2}.</p>`
  res.innerHTML += `<p>A média final será ${aluMedia}.</p>`
}