var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()
var time = document.getElementById('TIME')
console.log(`Agora são exatamente ${hora}:${min}:${seg}`)
if (hora <= 5){
    console.log("AM.Boa madrugada")
}else if (hora <= 12){
    console.log(" AM. Bom dia")
} else if (hora <= 18){
    console.log(" PM. Boa tarde") 
} else if (hora <= 23){
    console.log(" PM. Boa noite")
}
