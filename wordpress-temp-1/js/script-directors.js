const requestURL = 'https://jessiemangum16.github.io/final-website/js/directors.json';

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

        img.setAttribute('src', "images/directors/" + b[i].photo);
        img.setAttribute('alt', b[i].name + ' photo');
        h2.textContent = b[i].name;
        p_1.textContent = b[i].company;
        p_2.textContent = b[i].title;
        p_3.textContent = b[i].phone;

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(p_1);
        card.appendChild(p_2);
        card.appendChild(p_3);

        document.querySelector('div#board').appendChild(card);
    }
  });