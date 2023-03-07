var idd = 70
if (idd < 16) {
    console.log('Não Vota no Brasil')
}
else if (idd < 18 || idd > 65) {
    console.log('Voto opicional no Brasil')
}
else {
    console.log('Voto obrigatório')
}