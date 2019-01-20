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


 //Mostrar data
 /*const showData = (dataA) => {
     let result = '';
     dataA.forEach(element => {
         result = containerRoot.innerHTML += `
         <div class="card">
         <div class="img">
         <img src="${element.characterImageFull}"> 
         </div>
         </div>`
     });
     return result;
 }
 window.onload = showData(dataA);*/



//Mostrando la Data
const showData = (dataA) => {
    let result = '';
    characterActors(dataA);
    return result;
}

        

//Función para ver personajes
 function characterActors(dataP){
    // limpio div
   containerRoot.innerHTML = '';
   dataP.forEach(element => {
       containerRoot.innerHTML += `
        <div class="card">
           <div class="box">
                <div class="img">
                   <img src="${element.characterImageFull}"></div>
                   <h2>Name:${element.characterName}<span>Actor: ${element.actorName}</span></h2>
           </div>
        </div>`
    });
}



window.onload = showData(dataA);
//no todos tienen houseName