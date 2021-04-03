const requestURL = 'https://jessiemangum16.github.io/Final%20Website/js/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const bus = jsonObject['businesses'];
    for (let i = 0; i < bus.length; i++ ) {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let h2 = document.createElement('h2');
        let p_1 = document.createElement('p');
        let p_2 = document.createElement('p');
        let p_3 = document.createElement('p');
        let p_4 = document.createElement('p');

        logo.setAttribute('src', bus[i].logo);
        logo.setAttribute('alt', bus[i].name + 'logo');
        h2.textContent = bus[i].name;
        p_1.textContent = bus[i].website;
        p_2.textContent = bus[i].address1;
        p_3.textContent = bus[i].address2;
        p_4.textContent = bus[i].phone;

        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(p_1);
        card.appendChild(p_2);
        card.appendChild(p_3);
        card.appendChild(p_4);

        document.querySelector('div#local-b').appendChild(card);
    }
  });