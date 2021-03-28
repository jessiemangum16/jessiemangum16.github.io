const currentPrestonApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
fetch(currentPrestonApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let currentPreston = "Currently: " + jsObject.main.temp.toFixed(0) + "\xB0 F " + jsObject.weather[0].description;

    document.getElementById('current-Preston').textContent = currentPreston;

  });

const currentSodaApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
fetch(currentSodaApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let currentSodaSprings = "Currently: " + jsObject.main.temp.toFixed(0) + "\xB0 F " + jsObject.weather[0].description;

    document.getElementById('current-Soda Springs').textContent = currentSodaSprings;

  });

  const currentFishApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
  fetch(currentFishApiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
  
      let currentFishHaven = "Currently: " + jsObject.main.temp.toFixed(0) + "\xB0 F " + jsObject.weather[0].description;
  
      document.getElementById('current-Fish Haven').textContent = currentFishHaven;
  
    });