/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */
 // Creando variable para data de personajes
 const dataA = (DATA.characters);
//Creando data episodios
//const episodes = (window.EPISODES.episodes);
 //llamo a mi root
 const containerRoot = document.getElementById('root');


//Mostrando la Data
const showData = (dataA) => {
    let result = '';
    characterActors(dataA);
    return result;
}

        

//Función para ver data
 function characterActors(dataP){
    // limpio div
   containerRoot.innerHTML = '';
   dataP.forEach(element => {
       containerRoot.innerHTML += `
       <div class="card" style="width: 18rem;">
  <img src="${element.characterImageFull}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Nombre: ${element.characterName}</h5>
    <p class="card-text">Actor: ${element.actorName}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.houseName}</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`




       /*<div class="card">
           <div class="box">
                <div class="img">
                   <img src="${element.characterImageFull}"></div>
                   <h2>Name: ${element.characterName}<br><span>Actor: ${element.actorName}</span></h2>
           </div>
        </div>*/
    });
}



window.onload = showData(dataA);
//no todos tienen houseName

