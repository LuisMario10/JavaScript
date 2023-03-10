function calcMult() {
    var n = document.getElementById('num')
    var res = document.getElementById('res')
    num = Number(n.value)
    var i = 1
    while (i <= 10) {
        res.innerText = `${num} x ${i} = ${num*i}`
        i++
        
    }
}