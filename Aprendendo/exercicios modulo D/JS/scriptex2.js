function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.style.background = 'gold'
        document.body.style.background = 'yellow'
    }
    else if (hora >= 12 && hora <= 18) {
        img.style.background = 'darkorange'
        document.body.style.background = 'orangered'
    }
    else {
        img.style.background = 'grey'
        document.body.style.background = 'darkslategrey'

    }

}