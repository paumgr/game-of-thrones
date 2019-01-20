
//Creando data episodios
const dataB =  window.episodes.episodes
 //llamo a mi root
 const containerRoot2 = document.getElementById('root2');
 const filterTemps = document.getElementById('season')


//Mostrando la Data
const showDataE = (dataB) => {
    let result = '';
    episod(dataB); 
    return result;
}

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
       <div class="card">
       <div class="box">
            <div class="href">
               <a href="${element.episodeLink}"></div>
               <h2>Episodio: ${element.episodeNum}<br><span>Temporada: ${element.seasonNum}</span></h2>
       </div>
    </div>`
    });
}

window.onload = showDataE(dataB);

