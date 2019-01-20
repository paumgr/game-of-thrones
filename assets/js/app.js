/**
 * 
 * Acá va solo la lógica
 * 
 */
//Función para filtrar
const filterSeason = (dataB, condition) => {
    //filter es un ciclo iterativo como el for, forech, reviw
    const filteredSeason= dataB.filter(element => {
        return element.seasonNum === condition
    })
    return filteredSeason;
  };
  window.filterSeason=filterSeason;
  