const currentApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
fetch(currentApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let currentPreston = "Currently: " + jsObject.main.temp.toFixed(0) + "\xB0 F " + jsObject.weather[0].description;

    document.getElementById('current-Preston').textContent = currentPreston;


  
  });