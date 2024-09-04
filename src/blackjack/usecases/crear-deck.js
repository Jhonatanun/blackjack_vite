import _ from 'underscore'


export let j = 'Jhonatan';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta -Ejemplo:  ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales -Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas 
 */



export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {
    
    if ( !tiposDeCarta || tiposDeCarta === 0 )
        throw new Error('Tipos de carta es obligatorio como un arreglo de strings');
    
    if ( !tiposEspeciales || tiposEspeciales === 0 ) 
        throw new Error('Tipos Especiales de carta es obligatorio como un arreglo de strings');

    let deck = [];

    let tipos = tiposDeCarta;
    let especiales = tiposEspeciales;

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }
    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    return _.shuffle( deck );
}
