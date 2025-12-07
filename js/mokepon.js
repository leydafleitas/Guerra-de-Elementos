let ataqueJugador   



function seleccionarMascotaJugador() {
    let seleccion;
    if(document.getElementById('Hipodoge').checked == true){
        seleccion = 'HIPODOGE';
    } else if (document.getElementById('Capipepo').checked == true){
        seleccion = 'CAPIPEPO';
    } else if(document.getElementById('Ratigueya').checked == true){
        seleccion = 'RATIGUEYA';
    } else{
        seleccion = null
    }
    if (seleccion != null){
        alert('SELECCIONASTE TU MASCOTA ' + seleccion)
        document.getElementById('mascota-jugador').innerHTML = seleccion
    } else {
        alert('DEBES DE SELCCIONAR UNA MASCOTA')
    }

    seleccionarMascotaEnemigo()

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaEnemigo() {
    let numero = aleatorio(1,3)
    let seleccionEnemigo
    if (numero == 1){
        seleccionEnemigo = 'HIPODOGE'
    } else if (numero == 2){
        seleccionEnemigo = 'CAPIPEPO'
    } else{
        seleccionEnemigo = 'RATIGUEYA'
    }

    alert('EL ENEMIGO SELECCIONO LA MASCOTA '+ seleccionEnemigo)
    document.getElementById('mascota-enemigo').innerHTML = seleccionEnemigo
}

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota') 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

//Carga el documento .html y despues ejecuta la función Iniciar Juego
window.addEventListener('load', iniciarJuego)