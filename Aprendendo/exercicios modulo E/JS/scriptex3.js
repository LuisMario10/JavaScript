function calcMult() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    if (num.value.length == 0) {
        alert('Campo vazio! tente novamente')
    }
    else {
        let n = Number(num.value)
        let c = 1
        res.innerHTML = ' '
        while (c <= 10)  {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
    }
}