
ver = document.querySelector("input#ver")
ver = document.addEventListener( "mouseclick" , verificar )




function verificar() {

  nas = document.querySelector("input#idade")
  
  oma = document.querySelector("input#oma")
  ofe = document.querySelector("input#ofe")
  onb = document.querySelector("input#onb")

  res = document.querySelector("div#res")

  data = new Date()
  ano = data.getFullYear()

  aa = Number(ano)
  an = Number(nas.value)
  idade = aa - an

  img = document.createElement("img")



    if ( an==0 || an>aa ) {
      alert("[ERRO] Verifique as informações.")


            } else if ( oma.checked && idade<12 ) { // masculino criança
            res.innerHTML = `<p>Você é um garoto de ${idade} anos!</p>`
            img.setAttribute("src", "conteudo/oma_img-01.png")
            } else if ( oma.checked && idade<18 ) { // masculino jovem
                res.innerHTML = `<p>Você é um jovem de ${idade} anos!</p>`
                img.setAttribute("src", "conteudo/oma_img-02.png")
            } else if ( oma.checked && idade<50 ) { // masculino adulto
                res.innerHTML = `<p>Você é um homem de ${idade} anos!</p>`
                img.setAttribute("src", "conteudo/oma_img-03.png")
            } else if ( oma.checked && idade<=120) { // masculino idoso
                res.innerHTML = `<p>Você é um idoso de ${idade} anos!</p>`
                img.setAttribute("src", "conteudo/oma_img-04.png")
            } else if ( oma.checked && idade>120) { // mumia
                res.innerHTML = `<p>Você tem ${idade} anos e com certeza calvice.</p>`
                img.setAttribute("src", "conteudo/mumi.png")



            } else if ( ofe.checked && idade<12 ) { // feminio criança
            res.innerHTML = `<p>Você é uma garota de ${idade} anos!</p>`
            img.setAttribute("src", "conteudo/ofe_img-01.png")
            } else if ( ofe.checked && idade<18 ) { // feminino jovem
                res.innerHTML = `<p>Você é uma jovem de ${idade} anos!</p>`
                img.setAttribute("src", "conteudo/ofe_img-02.png")
            } else if ( ofe.checked && idade<50 ) { // feminino mulher
                res.innerHTML = `<p>Você é uma mulher de ${idade} anos!</p>`
                img.setAttribute("src", "conteudo/ofe_img-03.png")
            } else if ( ofe.checked && idade<=120) { // feminino idosa
                res.innerHTML = `<p>Você é uma idosa de ${idade} anos!</p>`
                img.setAttribute("src", "conteudo/ofe_img-04.png")
            } else if ( ofe.checked && idade>120) { // mumia
                res.innerHTML = `<p>Você tem ${idade} anos! Um feito extraordinário!</p>`
                img.setAttribute("src", "conteudo/mumi.png")



            } else if ( onb.checked && idade<12 ) { // não-binário criança
            res.innerHTML = `<p>Você é uma criança de ${idade} anos!</p>`
            img.setAttribute("src", "conteudo/onb_img-01.png")
            } else if ( onb.checked && idade<18 ) { // não-binário jovem
                res.innerHTML = `<p>Você tem ${idade} anos e uma vida inteira pela frente!</p>`
                img.setAttribute("src", "conteudo/onb_img-02.png")
            } else if ( onb.checked && idade<50 ) { // não-binário maior de idade
                res.innerHTML = `<p>Você tem muitas responsabilidades, boletos pra pagar e ${idade} anos de idade!</p>`
                img.setAttribute("src", "conteudo/onb_img-03.png")
            } else if ( onb.checked && idade<=120 ) { // não-binário coroa
                res.innerHTML = `<p>Você tem ${idade} anos e provavelmente muitas dores na costas!</p>`
                img.setAttribute("src", "conteudo/onb_img-04.png")
            } else if ( onb.checked && idade>120 ) { // mumia
                res.innerHTML = `<p>Você tem ${idade} e é provavel que tenha ajudado nas construções das pirâmides.</p>`
                img.setAttribute("src", "conteudo/mumi.png")}

    if ( an!=0 && an<aa ) { res.appendChild(img) }

}