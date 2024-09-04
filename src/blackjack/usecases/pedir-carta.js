
/**
 * Esta función retorna una carta extraida del juego de cartas: deck
 * @param {Array<String>} deck  es un arreglo de string - Ejemplo: ['2S', 'AD', '4S', '4C', '3C', '6H'...]
 * @returns {<String>} Retorna la carta extraida del juego de cartas: deck
 */

  export const pedirCarta = (deck) => {
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
};