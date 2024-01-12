

agora = new Date()
h = agora.getHours()
m = agora.getMinutes()


hra = document.querySelector("div#hra")
body = document.querySelector("body")
box = document.querySelector("div#box")

img = document.createElement("img")


if ( h==0 ) { // meia noite
    body.classList.add('meia-noite')
    res.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/1-img_hora.png")


} else if ( h<5 && m<45 ) { // madrugada
    body.classList.add('madrugada')
    res.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/2-img_hora.png")


} else if (h<=6&&m<=15) { // amanhecer
    body.classList.add('amanhecer')
    res.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/3-img_hora.png")


} else if (h<12&&m<45) { // manhã
    body.classList.add('manha')
    res.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/4-img_hora.png")


} else if (h<=13&&m<=15) { // meio dia
    body.classList.add('meio-dia')
    res.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/5-img_hora.png")


} else if (h<17&&m<45) { // tarde
    body.classList.add('tarde')
    res.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/6-img_hora.png")


} else if ( h==18 ) { // anoitecer
    body.classList.add('anoitecer')
    res.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/7-img_hora.png")


} else if ( h>18 && h<24 ) { // noite
    body.classList.add('noite')
    box.innerHTML = `<p>Agora são ${h} horas e ${m} minutos</p>`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/8-img_hora.png")


}