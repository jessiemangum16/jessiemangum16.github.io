const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=159b64909a20d12c8a9f4243af9f627b";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // TEST SITE
    let prestonTemp = (jsObject.main.temp - 273.15) * (9/5) + 32;
    
    document.getElementById('current-temp').textContent = prestonTemp.toFixed(0);

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

    //WEATHER SITE
    document.getElementById('current').textContent = jsObject.main.temp;
    document.getElementById('high').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;
  });