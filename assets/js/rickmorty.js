const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

const fillData = (data) => {
  let html = ""
  data.results.forEach((pp) => {
    html += '<div class="col">';
    html += '<div class="card h-100" style="width: 12rem;">';
    html += `<h2 class="card-title" > ${pp.name} </h2>`;
    html += '<div class="card-body">';
    html += `<img  src="${pp.image}" class="card-img-top" alt="${pp.name}"`
    html += '<div class="card-footer">';
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("dataRaM").innerHTML = html;

};

getData(API);

