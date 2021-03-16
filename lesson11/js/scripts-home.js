/*************************** HOME PAGE TOWN DATA ***************************/
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const townsA = [6, 0, 2]
    for (let i = 0; i < townsA.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h4 = document.createElement('h4');
        let h5 = document.createElement('h5');
        let h3_1 = document.createElement('p');
        let h3_2 = document.createElement('p');
        let h3_3 = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = towns[townsA[i]].name;
        h4.textContent = '"' + towns[townsA[i]].motto + '"';
        h5.setAttribute('id', "current-" + towns[townsA[i]].name);
        h3_1.textContent = 'Year Founded: ' + towns[townsA[i]].yearFounded;
        h3_2.textContent = 'Population: ' + towns[townsA[i]].currentPopulation;
        h3_3.textContent = 'Annual Rainfall: ' + towns[townsA[i]].averageRainfall + '"';
        img.setAttribute('src', 'images/' + towns[townsA[i]].photo);
        img.setAttribute('alt', towns[townsA[i]].name + 'photo');

        card.appendChild(h2);
        card.appendChild(h4);
        card.appendChild(h5);
        card.appendChild(h3_1);
        card.appendChild(h3_2);
        card.appendChild(h3_3);
        card.appendChild(img);

        document.querySelector('div.towns').appendChild(card);
        

        
    }
  });