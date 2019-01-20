
//Creando data episodios
const dataB = (EPISODES.episodes);
 //llamo a mi root
 const containerRoot = document.getElementById('root2');


//Mostrando la Data
const showDataE = (dataB) => {
    let result = '';
   dataB.forEach(element => {
       result = containerRoot.innerHTML += `
       <div class="card">
       <div class="box">
               <a href="${element2.episodeLink}"></div>
               <h2>Temporada: ${element2.seasonNum}<br><span>Episodio: ${element2.episodeNum}</span></h2>
       </div>
    </div>`
    });
    return result;
}



window.onload = showDataE(dataB);
