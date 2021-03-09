const currentApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
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

    //5 DAY FORECAST
  
  });

const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsForecast) => {
    console.log(jsForecast);

    //5 DAY FORECAST
    document.getElementById('forecast-temp').textContent = jsForecast.list[6].main.temp;

    

    //document.getElementById('forecast-icon').textContent = jsForecast.list[6].weather.icon;
    console.log(jsForecast.city.name);
  });