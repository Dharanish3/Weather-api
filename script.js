// Task
const url = "https://restcountries.com/v3.1/all";
const res = fetch(url);
res
  .then((data) => data.json())
  .then((value) => {
    for (var i = 0; i < value.length; i++) {
      const div = document.createElement("div");
      //   const country = value[i].name.common;
      div.innerHTML = `<div class ="container">
      <div class ="  row row-cols-1 row-cols-md-3">
      <div class ="card-body">
      <div class = "card">
         <h1 class ="card-header text-center" id="title" >${value[i].name.common}</h1>
             <img src="${value[i].flags.png}" class ="card-img-top" alt ="..">
                <div class ="card-body">
                            <p class ="card-title">Capital :${value[i].capital} <p>
                            <p class ="card-title">Region : ${value[i].region}<p>
                            <p class="card-text"><b><i>SubRegion: ${value[i].subregion}</i></b></p>
                            <p class="card-text"><b><i>Population: ${value[i].population}</i></b></p>
                            <p class ="card-title">Country Code  : ${value[i].cca3}<p>
                           
                           
                </div>
               
                           
            </div>
            </div>
      </div>
      </div>
      `;

      document.body.append(div);
    }
  });
  