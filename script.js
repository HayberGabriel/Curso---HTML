function carregar() {
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    //var hora =22
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA! 
        img.src = 'imgs/manhã.png'
        document.body.style.background = '#e2cd9f'

    } else if (hora > 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imgs/tarde.png'
        document.body.style.background = '#b9846f'

    } else {
        // BOA NOITE!
        img.src = 'imgs/noite.png'
        document.body.style.background = '#515154'
    }
}