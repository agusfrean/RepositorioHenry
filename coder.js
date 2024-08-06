

function iniciar() {
    let nombre= prompt('Ingresa tu nombre')
    let actividad = prompt('¿Qué estas buscando?')
    console.log('Bienvenidx '+ nombre + ' podemos ayudarte a ' + actividad)
}
iniciar()



function seleccionar() {
    const taller1= 'hata'
    const taller2= "vinyasa"
    const taller3= "ashtanga"
    const talleres= ['hata', 'vinyasa', 'ashtanga']
  let sugerencia= prompt("prefieres hata, vinyasa o ashtanga?")
  if (sugerencia== 'hata'){
    alert("Elegiste una clase que te ayudara a descansar")
  }
 else if (sugerencia== 'vinyasa'){
    alert("Elegiste una clase que te mantendrá presente y al ritmo de la respiración")
  }
  else if (sugerencia== 'ashtanga'){
    alert("Elegiste una clase de mucha exigencia fisica, que te permitirá redescubrir tus posibilidades")

  }
  else{
    alert("No tenemos esa actividad disponible")
  }

}
seleccionar()