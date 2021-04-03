const currentApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
fetch(currentApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let cardF = document.createElement('div');
    let tempF = document.createElement('p');
    let imgF = document.createElement('img');
    let imgDes = document.createElement('p');
    let hum = document.createElement('p');
    
    tempF.textContent = "Currently: " + jsObject.main.temp.toFixed(0) + "\xB0 F";
    hum.textContent = "Humidity: " + jsObject.main.humidity + "%";

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    imgF.setAttribute('src', imagesrc);
    imgF.setAttribute('alt', desc);

    imgDes.textContent = desc;

    cardF.setAttribute('class', "cWeather")
    
    
    cardF.appendChild(tempF);
    cardF.appendChild(imgF);
    cardF.appendChild(imgDes);
    cardF.appendChild(hum);

    document.querySelector('div.currentW').appendChild(cardF);
  });

const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5780993&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsForecast) => {
    console.log(jsForecast);

    //5 DAY FORECAST
    var i = 1;
      for(var x=0; (i<2 || x<jsForecast.list.length); x++){
        if(jsForecast.list[x].dt_txt.includes("18:00:00")){
          let cardF = document.createElement('section');
          let tempF = document.createElement('p');
          let imgF = document.createElement('img');
          
          tempF.textContent = jsForecast.list[x].main.temp.toFixed(0) + "\xB0 F";

          const imagesrc = 'https://openweathermap.org/img/w/' + jsForecast.list[x].weather[0].icon + '.png';  // note the concatenation
          const desc = jsForecast.list[x].weather[0].description;  // note how we reference the weather array
          imgF.setAttribute('src', imagesrc);
          imgF.setAttribute('alt', desc);
          
          cardF.appendChild(imgF);
          cardF.appendChild(tempF);
          

          document.querySelector('div.threeDay' + i).appendChild(cardF);
          
          i++; 
        }
      }
  });