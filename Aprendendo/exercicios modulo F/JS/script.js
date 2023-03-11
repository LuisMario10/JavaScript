let num = document.getElementById('inum')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return false
    }
    else {
        return true
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    }
    else {
        alert('Valor invalido ou ja encontrado na lista')
    }
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    }
    else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma/ tot
        res.style.color = 'blue'
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados</p><br>`
        res.innerHTML += `O maior valor encontrado: ${maior}<br><br>`
        res.innerHTML += `O menor valor encontrado: ${menor}<br><br>`
        res.innerHTML += `O somatorio de todos os Valores: ${soma}<br><br>`
        res.innerHTML += `A media aritimetica dos valores: ${media}<br><br>`
    }
}