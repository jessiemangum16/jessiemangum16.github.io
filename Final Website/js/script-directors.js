const requestURL = 'https://jessiemangum16.github.io/Final%20Website/js/directors.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const b = jsonObject['board'];
    for (let i = 0; i < b.length; i++ ) {
        let card = document.createElement('section');
        let img = document.createElement('img');
        let h2 = document.createElement('h2');
        let p_1 = document.createElement('p');
        let p_2 = document.createElement('p');
        let p_3 = document.createElement('p');

        img.setAttribute('src', b[i].photo);
        img.setAttribute('alt', b[i].name + 'logo');
        h2.textContent = jsonObject.binesses[0].name;
        p_2.textContent = b[i].address1;
        p_3.textContent = b[i].address2;
        p_4.textContent = b[i].phone;

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(p_1);
        card.appendChild(p_2);
        card.appendChild(p_3);

        document.querySelector('div#board').appendChild(card);
    }
  });