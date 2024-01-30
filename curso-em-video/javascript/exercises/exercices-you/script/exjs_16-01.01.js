
function contar() {


  let valCom = Number(document.querySelector("input#numCom").value)
  let valFim = Number(document.querySelector("input#numFim").value)
  let valPas = Number(document.querySelector("input#numPas").value)
  let res = document.querySelector("section#res")




  if ( valPas == 0 || valPas == "" ) { valPas = 1 } // Garantir Passo


  if ( valCom > valFim ) { // Saber Diferença & Direção
      valDif = valCom - valFim
      contDirec = "decrescente"
  }
  if ( valCom < valFim ) {
      valDif = valFim - valCom
      contDirec = "crescente"
  }




  if ( valDif <= valPas ) {  // Verificação dos Valores

    window.alert("[ERRO] Verifique as informações inseridas!\nO valor inícial é igual ao valor final ou a diferença entre esses dois valores é menor que o valor de passo.")

  } else {

    let c

    res.innerHTML = `<h3>Iniciando uma contagem ${contDirec} do <strong>${valCom}</strong> ao <strong>${valFim}</strong> em passos de <strong>${valPas}</strong>.</h3><br>`


    if (contDirec == "decrescente") {
      for ( c=valCom ; c>=valFim ; c-=valPas ) {
          if (c == valCom) {
              contText = `<span>${String(c).padStart(3, '0')}</span>`
          } else {
              contText = `${contText} • <span>${String(c).padStart(3, '0')}</span>`
          }
    } c += valPas }


    if (contDirec == "crescente") {
      for ( c=valCom ; c<=valFim ; c+=valPas ) {
          if (c == valCom) {
              contText = `<span>${String(c).padStart(3, '0')}</span>`
          } else {
              contText = `${contText} • <span> ${String(c).padStart(3, '0')}</span>`
          }
    } c -= valPas }



    res.innerHTML += `<p>${contText}</p><br>`


    if (c != valFim) {


      if (contDirec == "decrescente") {

          res.innerHTML += `<p>A conta não chegou ao <strong>${valFim}</strong>!</p><br>`
          if (c > valFim) {
              valFal = c - valFim - valPas
              res.innerHTML += `<p>Não é possível ir do <strong>${valCom}</strong> ao <strong>${valFim}</strong> em passos de <strong>${valPas}</strong>, pois resta <strong>${valFal - 2 * valFal}</strong>.</p>`
          } else {
              valFal = valFim - c - valPas
              res.innerHTML += `<p>Não é possível ir do <strong>${valCom}</strong> ao <strong>${valFim}</strong> em passos de <strong>${valPas}</strong>, pois falta <strong>${valFal}</strong>.</p>`
          }
      }
      if (contDirec == "crescente") {

          res.innerHTML += `<p>A conta não chegou ao <strong>${valFim}</strong>!</p><br>`
          if (c > valFim) {
              valFal = valFim - c + valPas
              res.innerHTML += `<p>Não é possível ir do <strong>${valCom}</strong> ao <strong>${valFim}</strong> em passos de <strong>${valPas}</strong>, pois falta <strong>${valFal - 2 * valFal}</strong>.</p>`
          } else {
              valFal = c - valFim + valPas
              res.innerHTML += `<p>Não é possível ir do <strong>${valCom}</strong> ao <strong>${valFim}</strong> em passos de <strong>${valPas}</strong>, pois resta <strong>${valFal}</strong>.</p>`
          }
      }
    } else {
      res.innerHTML += "<p>A contagem chegou ao fim!</p>"
    }
    
  }
}