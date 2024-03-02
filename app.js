let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 20;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"} `); 
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero es menor");
        } else {
            asignarTextoElemento("p","El numero es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    // si ya sorteamos los numeros 
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","ya se sortearon todos los numeros posibles");
    } else {
        // si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
             return generarNumeroSecreto();
        } else {
           listaNumeroSorteados.push(numeroGenerado);
           return numeroGenerado;
        } 
    }

}

function condicionesIniciales() {
    asignarTextoElemento("h1", "juego del numero secreto");
    asignarTextoElemento("p", `indique un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalos de numeros
    // generar numero aleatorio
    // inicializar el numero de intentos 
    condicionesIniciales();
    // deshabilitar el boton de juego 
    document.querySelector("#reiniciar").setAttribute("disabled",true);
}

condicionesIniciales();