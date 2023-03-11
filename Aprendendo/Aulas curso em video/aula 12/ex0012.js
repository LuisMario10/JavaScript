var agr = new Date()
var hora = agr.getHours()
if (hora > 6 && hora < 12)  {
    console.log('Bom dia! Luis Mario')
}
else if (hora > 12 && hora < 18) {
    console.log('Boa Tarde! Luis Mario')
}
else if (hora > 18 && hora < 24) {
    console.log('Boa Noite! Luis Mario')
}

else if (hora > 1 && hora < 5) {
    console.log('Boa Madrugada!')
}