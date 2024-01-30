

function analisar() {
    meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    agora = new Date
    saida = document.getElementById('res')
    dia = agora.getDate()
    mes = agora.getMonth()
    ano = agora.getFullYear()
    sem = agora.getDay()
    hora = agora.getHours()
    min = agora.getMinutes()
    seg = agora.getSeconds()
    res.innerHTML = `<h3>Analisando Data e Hora.</h3><br>`
    res.innerHTML += `<p>Dia: <strong>${dia}</strong></p>`
    res.innerHTML += `<p>Mês: <strong>${meses[mes]}</strong></p>`
    res.innerHTML += `<p>Ano: <strong>${ano}</strong></p>`
    res.innerHTML += `<p>Dia da semana: <strong>${semana[sem]}</strong></p>`
    res.innerHTML += `<p>Hora: <strong>${hora}</strong></p>`
    res.innerHTML += `<p>Minutos: <strong>${min}</strong></p>`
    res.innerHTML += `<p>Segundos: <strong>${seg}</strong></p>`
}