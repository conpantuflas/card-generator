
//botones
let numeroCambio = document.getElementsByClassName("numerosCambio")
let botonRandom = document.getElementById("botonRandom")
let pinta = document.getElementById("botonPinta")
let numero = document.getElementById("botonNumero")

//img
let imgUno = document.getElementById("imgUno")
let imgDos = document.getElementById("imgDos")

//arreglo imagenes
let imgArreglo = ["conejo","gato","oso","perro"] 

//cambio numeral de la carta
let arrNumeros = [1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"]

//----------------------------------------------------------------------------{funcionalidades}

//cambio de pinta
function cambioPinta(){
  let aleatorio = Math.floor(Math.random() *(3 + 1));
  imgUno.src = `http://localhost:5500/img/${imgArreglo[aleatorio]}.png`
  imgDos.src = `http://localhost:5500/img/${imgArreglo[aleatorio]}.png`
}
pinta.addEventListener("click", cambioPinta)

//---------------------------------------------------------------

//cambio de numero
function cambioDeNumero(){
  let aleatorio = Math.floor(Math.random()*(13 + 1));
  for (const element of numeroCambio){
    element.innerText =`${aleatorio}`
  }
}
numero.addEventListener("click",cambioDeNumero)

//---------------------------------------------------------------

//carta aleatoria
function random(){
  cambioPinta()
  cambioDeNumero()
}
botonRandom.addEventListener("click", random)

//---------------------------------------------------------------




