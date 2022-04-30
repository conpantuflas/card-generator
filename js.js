//----------------------------------------------------------------------{material de trabajo}
//clases

//botones
let numeroCambio = document.getElementsByClassName("numerosCambio")
let random = document.getElementById("botonRandom")
let pinta = document.getElementById("botonPinta")
let numero = document.getElementById("botonNumero")

//img
let imgUno = document.getElementById("imgUno")
let imgDos = document.getElementById("imgDos")

//arreglo imagenes
let imgArreglo = ["conejo","gato","oso","perro"] 

//cambio numeral de la carta
let arrNumeros = [1,2,3,4,5,6,7,8,9,10,"J","Q","K","As"]

//----------------------------------------------------------------------------{funcionalidades}

//cambio de pinta
pinta.addEventListener("click", function(){
  let aleatorio = Math.floor(Math.random() *(3 + 1));
  imgUno.src = `http://localhost:5500/img/${imgArreglo[aleatorio]}.png`
  imgDos.src = `http://localhost:5500/img/${imgArreglo[aleatorio]}.png`
})

//---------------------------------------------------------------

//cambio de numero
numero.addEventListener("click",function(){
  let aleatorio = Math.floor(Math.random()*(13 + 1));
  numeroCambio.forEach(element => {
    console.log(element)
  });
  console.log(numeroCambio)
  
})

//---------------------------------------------------------------
//carta aleatoria

//---------------------------------------------------------------




