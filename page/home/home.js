var miDiv = document.getElementById("miDiv")
var black = document.getElementById("black--b")
var likee = document.getElementById("like-cont")
var busqueda =document.getElementById("sear")
var busblanck =document.getElementById("search-cont")
var inpserch =document.getElementById("cont-search--animate")
var carrito =document.getElementById("cont__car-a")
// -----------------------------------------------------------------------
var animPerfil =document.getElementById("nav__li--perfil")
var animNovedades =document.getElementById("nav__li--novedades")
var animColeccion =document.getElementById("nav__li--coleccion")
var animTendencia =document.getElementById("nav__li--tendencia")
var animRebajas =document.getElementById("nav__li--rebajas")
var animEstilos =document.getElementById("nav__li--estilos")
var animConjuntos =document.getElementById("nav__li--conjuntos")
var animMujer =document.getElementById("nav__li--mujer")
var animHombre =document.getElementById("nav__li--hombre")
var animNiños =document.getElementById("nav__li--niños")
var animDeportes =document.getElementById("nav__li--deportes")
var animMaquillaje =document.getElementById("nav__li--maquillaje")
var animAccesorios =document.getElementById("nav__li--accesorios")
var animAccesos =document.getElementById("ing-reganim")
// -----------------------------------------------------------------------

desactivarlike()
desactivarsearch()
desactivarcar()
// -------------------

function toggleDiv() {
    miDiv.classList.add("nav--active");
    black.classList.add("blackk")
    // -------------------------------
    setTimeout(() => {
      animPerfil.classList.add("nav__li--an");
    }, 400)
    setTimeout(() => {
      animNovedades.classList.add("nav__li--an");
    }, 500)
    setTimeout(() => {
      animColeccion.classList.add("nav__li--an");
    }, 600)
    setTimeout(() => {
      animTendencia.classList.add("nav__li--an");
    }, 700)
    setTimeout(() => {
      animRebajas.classList.add("nav__li--an");
    }, 800)
    setTimeout(() => {
      animEstilos.classList.add("nav__li--an");
    }, 900)
    setTimeout(() => {
      animConjuntos.classList.add("nav__li--an");
    }, 1000)
    setTimeout(() => {
      animMujer.classList.add("nav__li--an");
    }, 1100)
    setTimeout(() => {
      animHombre.classList.add("nav__li--an");
    }, 1200)
    setTimeout(() => {
      animNiños.classList.add("nav__li--an");
    }, 1300)
    setTimeout(() => {
      animDeportes.classList.add("nav__li--an");
    }, 1400)
    setTimeout(() => {
      animMaquillaje.classList.add("nav__li--an");
    }, 1500)
    setTimeout(() => {
      animAccesorios.classList.add("nav__li--an");
    }, 1600)
    setTimeout(() => {
      animAccesos.classList.add("ing-regint");
    }, 1900)
    // -------------------------------
  }

  function desactivarDiv() {
    miDiv.classList.remove("nav--active");
    black.classList.remove("blackk")
    // -------------------------------
    animPerfil.classList.remove("nav__li--an")
    animNovedades.classList.remove("nav__li--an");
    animColeccion.classList.remove("nav__li--an");
    animTendencia.classList.remove("nav__li--an");
    animRebajas.classList.remove("nav__li--an");
    animEstilos.classList.remove("nav__li--an");
    animConjuntos.classList.remove("nav__li--an");
    animMujer.classList.remove("nav__li--an");
    animHombre.classList.remove("nav__li--an");
    animNiños.classList.remove("nav__li--an");
    animDeportes.classList.remove("nav__li--an");
    animMaquillaje.classList.remove("nav__li--an");
    animAccesorios.classList.remove("nav__li--an");
    animAccesos.classList.remove("ing-regint");
  }
// -------------------------------------------------------

  function activarlike(){
    likee.classList.add("cont-like-atrib")
    black.classList.add("blackk")
  }

  function desactivarlike(){
    likee.classList.remove("cont-like-atrib")
    black.classList.remove("blackk")
  }

// ------------------------------------------------------

function activarsearch(){
  black.classList.add("blackk")
  busblanck.classList.add("animate-search-quit")
  busqueda.classList.add("animate-search")
  setTimeout(() => {
    inpserch.classList.add("cont-search--input-animation");
  }, 1000)
  
}

function desactivarsearch(){
  black.classList.remove("blackk")
  busqueda.classList.remove("animate-search")
  busblanck.classList.remove("animate-search-quit")
  inpserch.classList.remove("cont-search--input-animation");

}

// --------------------------------------------------------------
function desactivarcar(){
  carrito.classList.remove("cont-car__aparecer")
  black.classList.remove("blackk")
}

function activarcar(){
  carrito.classList.add("cont-car__aparecer")
  black.classList.add("blackk")
}

// ------------------------------------------------------------

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// -----------------------------------------------------------
var heartCor = document.getElementById('heart--change');

heartCor.addEventListener('click', function() {
  if (heartCor.classList.contains('active')) {
    heartCor.classList.remove('active');
  } else {
    heartCor.classList.add('active');
  }
});