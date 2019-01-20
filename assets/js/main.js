
 // Creando variable para data de personajes
 const dataA = window.data.characters;
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
    <li class="list-group-item">Casa: ${element.houseName}</li>
    <li class="list-group-item">Hermanos: ${element.siblings}</li>
    <li class="list-group-item">Apodo: ${element.nickname}</li>
  </ul>
</div>`
    });
}

window.onload = showData(dataA);











