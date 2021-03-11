//const axios = require('axios'); //node.js lösning

//plocka class="container" från html
const container = document.querySelector(".container");

//funktion för json/api hantering
const showReqRes = () => {
//skapar en tom sträng för HTML-innehåll
let output = ""

//axios funktioner
axios.get('http://localhost:3000/shortcuts')
    .then(resp => {
        data = resp.data
        //testa
        data.forEach(e => {
            output += `
            <div class="card">
              <h1>${e.name}</h1>
              <img src="${e.img}" alt="avatar">
              <a href="${e.url}">${e.url}</a>
            </div>
            `;
            //consol-loggar för test:
            console.log(output);
            //console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
            
            container.innerHTML = output
        });
    })
    .catch(error => {
        console.log(error);
    });    
  }
  
  document.addEventListener("DOMContentLoaded", showReqRes)