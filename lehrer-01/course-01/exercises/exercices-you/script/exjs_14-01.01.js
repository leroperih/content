

agora = new Date()
h = agora.getHours()
m = agora.getMinutes()


body = document.querySelector("body")
box = document.querySelector("div#box")

img = document.createElement("img")


  if      ( h==0 ) { // meia noite
    body.classList.add('meia-noite')
    box.innerHTML = `<p>Agora são ${h} horas e ${m} minutos</p>`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/1-img_hora.png")


} else if ( h>0 && h<6 ) { // madrugada
    body.classList.add('madrugada')
    box.innerHTML = `<p>Agora são ${h} horas e ${m} minutos</p>`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/2-img_hora.png")
    box.innerHTML += `<p>/* Melhor Horário */</p>`


} else if ( h==6 ) { // amanhecer
    body.classList.add('amanhecer')
    box.innerHTML = `<p>Agora são ${h} horas e ${m} minutos</p>`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/3-img_hora.png")


} else if ( h>6 && h<12 ) { // manhã
    body.classList.add('manha')
    box.innerHTML = `<p>Agora são ${h} horas e ${m} minutos</p>`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/4-img_hora.png")


} else if ( h==12 ) { // meio dia
    body.classList.add('meio-dia')
    box.innerHTML = `<p>Agora são ${h} horas e ${m} minutos</p>`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/5-img_hora.png")


} else if ( h>12 && h<18 ) { // tarde
    body.classList.add('tarde')
    box.innerHTML = `<p>Agora são ${h} horas e ${m} minutos</p>`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/6-img_hora.png")


} else if ( h==18 ) { // anoitecer
    body.classList.add('anoitecer')
    box.innerHTML = `<p>Agora são ${h} horas e ${m} minutos</p>`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/7-img_hora.png")


} else if ( h>18 && h<24 ) { // noite
    body.classList.add('noite')
    box.innerHTML = `<p>Agora são ${h} horas e ${m} minutos</p>`
    box.appendChild(img)
    img.setAttribute("src", "conteudo/8-img_hora.png")


}