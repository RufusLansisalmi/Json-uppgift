//const axios = require('axios'); //node.js lösning

//plocka class="container" från html
const container = document.querySelector(".container");

//funktion för json/api hantering
const showReqRes = () => {
//skapar en tom sträng för HTML-innehåll
let output = ""

//axios funktioner
axios.get('https://reqres.in/api/users?page=1')
    .then(resp => {
        data = resp.data.data
        //testa
        console.log(data)
        data.forEach(e => {
            output += `
            <div class="card">
              <h1>${e.first_name} ${e.last_name}</h1>
              <img src="${e.avatar}" alt="avatar">
              <a href="mailto:${e.email}">${e.email}</a>
            </div>
            `;
            //consol-loggar för test:
            //console.log(output);
            //console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
            
            container.innerHTML = output
        });
    })
    .catch(error => {
        console.log(error);
    });    
  }
  
  document.addEventListener("DOMContentLoaded", showReqRes)