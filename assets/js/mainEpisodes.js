
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
       <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Capítulo: ${element.episodeNum}</h5>
    </div>
    <p class="mb-1">"${element.episodeTitle}"</p><br>
    <h8> ${element.episodeDescription}</h8><br>
    <small class="text-muted">Temporada: ${element.seasonNum}.</small>
  </a>
</div>
</div>
       `
    });
}

window.onload = showDataE(dataB);
