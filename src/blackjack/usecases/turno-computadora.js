import { pedirCarta } from "./pedir-carta";
import { crearCarta } from "./crear-carta";

// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck Array con las cartas disponibles, la cual usara la función -pedirCarta.
 * @param {Number} acumularPuntos Función que calcula los puntos acumulados de la computadora
 * @param {Array<Number>} puntosJugadores Array que recibe y y almacena en indices diferentes los puntos acumulados por los jugadores
 */
export const turnoComputadora = ( puntosMinimos, deck, acumularPuntos, puntosJugadores, divCartasJugadores ) => {

    if ( !puntosMinimos ) throw Error('Puntos minimos necesarios');
    if ( !deck ) throw Error('El deck es necesario');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
        
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  ( puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    
  const determinarGanador = () =>{

    const [puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora> 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

    determinarGanador();
   
  }