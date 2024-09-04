
import _ from 'underscore';
import { crearCarta, crearDeck, pedirCarta, valorCarta, j, turnoComputadora } from './usecases';

console.log(j);

const miModulo = (()=>{
  'use strict'

  let deck         = [];
  const tipos      = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];

  // let puntosJugador = 0, puntosComputadora = 0;
  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir   = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo   = document.querySelector('#btnNuevo');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

  // Esta función inicializa el juego
  const inicializarJuego = ( numeroJugadores=2 ) => {
      deck = crearDeck( tipos, especiales );
      puntosJugadores = [];
      for( let i = 0; i < numeroJugadores; i++){
          puntosJugadores.push(0);
      }
      
      puntosHTML.forEach(elemento => elemento.innerText = 0 );
      divCartasJugadores.forEach(elemento => elemento.innerHTML = '' );

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }
  
  //Turno: 0 = primer jugador y el último será la computadora
  const acumularPuntos = (carta, turno ) => {

      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
      puntosHTML[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno];
  }


  // Eventos
  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta(deck);
      const puntosMinimos = acumularPuntos(carta, 0)
     
      crearCarta(carta, 0, divCartasJugadores);

      if ( puntosMinimos > 21 ) {
          console.warn('Lo siento mucho, perdiste');
          btnPedir.disabled   = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosMinimos, deck, acumularPuntos, puntosJugadores, divCartasJugadores);

      } else if ( puntosMinimos === 21 ) {
          console.warn('21, genial!');
          btnPedir.disabled   = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosMinimos, deck, acumularPuntos, puntosJugadores, divCartasJugadores );
      }

  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled   = true;
      btnDetener.disabled = true;
      
      turnoComputadora( puntosJugadores[0], deck, acumularPuntos, puntosJugadores, divCartasJugadores );
  }); 

  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  });

  return {
      nuevoJuego: inicializarJuego
  };
})();




