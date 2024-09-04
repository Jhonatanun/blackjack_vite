
/**
 * Esta función me inserta la imagen de la carta solicitada en el html
 * @param {<String>} carta -Ejemplo: 9S
 * @param {<Number>} turno -Ejemplo: 1
 * @param {<Number>} divCartasJugadores - Esta constante me da acceso al div que  visualiza las cartas.
 */

export const crearCarta = (carta, turno, divCartasJugadores) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}