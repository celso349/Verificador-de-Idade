function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'homem'
            if(idade >=0 && idade < 10){
                // bebe
                img.setAttribute('src', 'Bebe-homem.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'Jovem-homem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','Adulto-homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'Velho-homem.jpg')
            }
        } else if (fsex[1].checked){
            genero= 'mulher'
            if(idade >=0 && idade < 10){
                // bebe
                img.setAttribute('src', 'Bebe-mulher.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'Jovem-mulher.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'Adulto-mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'Velha-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.style.textDecoration= 'underline'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}