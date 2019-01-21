
//Creando data episodios
const dataB =  window.episodes.episodes
 //llamo a mi root
 const containerRoot2 = document.getElementById('root2');



//Mostrando la Data
const showDataE = (dataB) => {
    let result = '';
    episod(dataB); 
    return result;
}
const filterTemps = document.getElementById('season')
//Filtrando
filterTemps.addEventListener('change', () => {
    let condition = filterTemps.value
    let filtered = window.filterSeason(dataB, condition);
    //limpiando mi div
    containerRoot2.innerHTML = '';
    episod(filtered);
    })

//Función para ver data
 function episod(dataE){
    // limpio div
   containerRoot2.innerHTML = '';
   dataE.forEach(element => {
       containerRoot2.innerHTML += `
       <div class="target col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
       <div class="card-episode">
       <div class="box">
            <div class="href">
               <div "${element.episodeLink}"></div>
               <h2>Capítulo: ${element.episodeNum}<br><h4>"${element.episodeTitle}"</h4><h3>Temporada: ${element.seasonNum}</h3></h2>
       </div>
    </div>
    <p>${element.episodeDescription}</p>
    </div>`
    });
}

window.onload = showDataE(dataB);

