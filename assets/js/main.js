
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
 function characterActors(dataA){
    // limpio div
   containerRoot.innerHTML = '';
   dataA.forEach(element => {
       containerRoot.innerHTML += `
       <div class="target col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
         <div class="card">
          <img src="${element.characterImageFull}" class="img" alt="Personaje GOT">
          <h5 class="card-title">${element.characterName}</h5>
         </div>
       </div>`
    });
}

window.onload = showData(dataA);











