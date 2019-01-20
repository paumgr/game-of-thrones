
//Creando data episodios
const dataB =  window.episodes.episodes
 //llamo a mi root
 const containerRoot2 = document.getElementById('root2');


//Mostrando la Data
const showDataE = (dataB) => {
    let result = '';
   dataB.forEach(element => {
       result = containerRoot2.innerHTML += `
       <div class="card">
       <div class="box">
            <div class="href">
               <a href="${element.episodeLink}"></div>
               <h2>Temporada: ${element.seasonNum}<br><span>Episodio: ${element.episodeNum}</span></h2>
       </div>
    </div>`
      
    });
    return result;
}



window.onload = showDataE(dataB);

