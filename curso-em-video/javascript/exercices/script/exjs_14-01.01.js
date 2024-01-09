

agora = new Date()
h = agora.getHours()
m = agora.getMinutes()


hra = document.querySelector("div#hra")
img = document.querySelector("div#img")
bgr = document.querySelector("body")
box = document.querySelector("div#box")


if (h==0&&m<=15) { // meia noite
    bgr.classList.toggle('meia-noite')
    bgr.classList.toggle('noite')
    box.classList.toggle('noite')


} else if (h<5&&m<45) { // madrugada
    cop.style.color = "whitesmoke"
    atualizar.innerHTML = `<a style="color: #595959" href="../exercicios/pag-exjs-14.html">Clique para atualizar</a>`
    hora.style.color = "#8C251C"
    caixa.style.background = "#050C0D"
    fundo.style.background = "#000101"
    hora.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    imagem.innerHTML = `<img src="conteudo/2 imagem .png" alt="Foto de um beco bem calmo em algum centro comercial a noite.">`


} else if (h<=6&&m<=15) { // nascer do sol
    cop.style.color = "black"
    atualizar.innerHTML = `<a style="color: black" href="../exercicios/pag-exjs-14.html">Clique para atualizar</a>`
    hora.style.color = "#E9A393"
    caixa.style.background = "#f5f5f5"
    fundo.style.background = "#8c9c9f"
    hora.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    imagem.innerHTML = `<img src="conteudo/3 imagem .png" alt="Foto de montanhas ao horizonte durante o nascer do sol.">`


} else if (h<12&&m<45) { // manhã
    cop.style.color = "black"
    atualizar.innerHTML = `<a style="color: black" href="../exercicios/pag-exjs-14.html">Clique para atualizar</a>`
    hora.style.color = "#CD9B12"
    caixa.style.background = "#f5f5f5"
    fundo.style.background = "#99B2D1"
    hora.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    imagem.innerHTML = `<img src="conteudo/4 imagem .png" alt="Foto de um céu azul em cima de um campo de girassois.">`


} else if (h<=13&&m<=15) { // meio dia
    cop.style.color = "black"
    atualizar.innerHTML = `<a style="color: black" href="../exercicios/pag-exjs-14.html">Clique para atualizar</a>`
    hora.style.color = "#4A81E6"
    caixa.style.background = "#f5f5f5"
    fundo.style.background = "#A5B7F1"
    hora.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    imagem.innerHTML = `<img src="conteudo/5 imagem .png" alt="Foto de um céu azul com algumas nuvens.">`


} else if (h<17&&m<45) { // tarde
    cop.style.color = "black"
    atualizar.innerHTML = `<a style="color: black" href="../exercicios/pag-exjs-14.html">Clique para atualizar</a>`
    hora.style.color = "#697179"
    caixa.style.background = "#f5f5f5"
    fundo.style.background = "#737D6E"
    hora.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    imagem.innerHTML = `<img src="conteudo/6 imagem .png" alt="Foto de alguma casa durante o dia.">`


} else if (h<=18&&m<=15) { // crepusculo
    cop.style.color = "black"
    atualizar.innerHTML = `<a style="color: black" href="../exercicios/pag-exjs-14.html">Clique para atualizar</a>`
    hora.style.color = "#97BCD0"
    caixa.style.background = "#f5f5f5"
    fundo.style.background = "#A47640"
    hora.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    imagem.innerHTML = `<img src="conteudo/7 imagem .png" alt="Foto de um lago e um caz durante o por do sol.">`


} else if (h<=23&&m<45) { // noite
    cop.style.color = "whitesmoke"
    atualizar.innerHTML = `<a style="color: #595959" href="../exercicios/pag-exjs-14.html">Clique para atualizar</a>`
    hora.style.color = "#55088A"
    caixa.style.background = "#212121"
    fundo.style.background = "#261314"
    hora.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    imagem.innerHTML = `<img src="conteudo/8 imagem .png" alt="Foto" foto de uma cidade durante a noite.>`


} else if (h<24&&m<60) { // meia noite
    cop.style.color = "whitesmoke"
    atualizar.innerHTML = `<a style="color: #595959" href="../exercicios/pag-exjs-14.html">Clique para atualizar</a>`
    hora.style.color = "#C86932"
    caixa.style.background = "#212121"
    fundo.style.background = "#280f05"
    hora.innerHTML = `Agora&nbsp;são&nbsp;${h}&nbsp;horas e&nbsp;${m}&nbsp;minutos`
    imagem.innerHTML = `<img src="conteudo/1 imagem .png" alt="Foto de uma rua deserta a noite.">`
}