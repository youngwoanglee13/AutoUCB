import Auto from './Auto.js';

const comandos = document.querySelector("#comandos");
const boton = document.querySelector("#botonEjecutar");
const posicionFinal = document.querySelector("#posicionFinal");
const posicionInicial = document.querySelector("#posicionInicial");
const tablero = document.querySelector("#tablero");

let auto = new Auto();
boton.addEventListener("click", () => {
    auto.mover(comandos.value);
    posicionFinal.innerHTML = auto.getPosicionFinal();
    posicionInicial.innerHTML = auto.getPosicionInicial();
    tablero.innerHTML = auto.getTablero();
});