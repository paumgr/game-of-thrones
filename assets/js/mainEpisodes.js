/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */

//Creando data episodios
const dataB = (EPISODES.episodes);
 //llamo a mi root
 const containerRoot = document.getElementById('root1');


//Mostrando la Data
const showData = (dataB) => {
    let result = '';
    characterActors(dataB);
    return result;
}

        

//Función para ver data
 function episodes(dataE){
    // limpio div
   containerRoot.innerHTML = '';
   dataE.forEach(element => {
       containerRoot.innerHTML += `
       <div class="card">
           <div class="box">
                <div class="href">
                   <a href="${element.episodeLink}"></div>
                   <h2>Temporada: ${element.seasonNum}<br><span>Episodio: ${element.episodeNum}</span></h2>
           </div>
        </div>`
    });
}



window.onload = showData(dataB);


