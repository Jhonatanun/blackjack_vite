
/**
 * Esta funcion retorna el valor en números de la carta solicitada
 * @param {<String>} carta Es la ultima carta que se ah solicitado
 * @returns {<Number>} Valor númerico de la carta 
 */

  // Esta funcion retorta el valor de la carta solicitada
  export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}