const currentApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
fetch(currentApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

   
    let prestonTemp = jsObject.main.temp;
    let prestonHigh = jsObject.main.temp_max;

    //WEATHER SUMMARY
    document.getElementById('current-desc').textContent = jsObject.weather[0].description;
    document.getElementById('current').textContent = prestonTemp.toFixed(0);
    document.getElementById('high').textContent = prestonHigh.toFixed(0);

    var speed = jsObject.wind.speed;
    var chill = 35.74 + (0.6215 * prestonTemp) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * prestonTemp * Math.pow(speed,0.16));

    document.getElementById('windChill').textContent = chill.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;

  
  });

const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsForecast) => {
    console.log(jsForecast);

    //5 DAY FORECAST
    var i = 1;
    for(var x=0; x<jsForecast.list.length; x++){
      if(jsForecast.list[x].dt_txt.includes("18:00:00")){
        let cardF = document.createElement('section');
        let tempF = document.createElement('p');
        let imgF = document.createElement('img');
        
        tempF.textContent = jsForecast.list[x].main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsForecast.list[x].weather[0].icon + '.png';  // note the concatenation
        const desc = jsForecast.list[x].weather[0].description;  // note how we reference the weather array
        imgF.setAttribute('src', imagesrc);
        imgF.setAttribute('alt', desc);
        
        cardF.appendChild(imgF);
        cardF.appendChild(tempF);
        

        document.querySelector('div.fiveDay' + i).appendChild(cardF);
        
        i++; 
      }
    }
  });


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const townsA = [2]
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p_1 = document.createElement('p');
        let p_2 = document.createElement('p');
        let p_3 = document.createElement('p');

        h2.textContent = towns[townsA].name + " Upcoming Events";
        p_1.textContent = towns[townsA].events[0];
        p_2.textContent = towns[townsA].events[1];
        p_3.textContent = towns[townsA].events[2];

        card.appendChild(h2);
        card.appendChild(p_1);
        card.appendChild(p_2);
        card.appendChild(p_3);

        document.querySelector('div.events').appendChild(card);
  });