const currentApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
fetch(currentApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

   
    let temp = jsObject.main.temp;
    let high = jsObject.main.temp_max;

    //WEATHER SUMMARY

    //document.getElementById('current').textContent = "Currently: " + jsObject.main.temp.toFixed(0) + "\xB0 F";
    //document.getElementById('current-desc').textContent = jsObject.weather[0].description;
    //document.getElementById('humidity').textContent = "Humidity: " + jsObject.main.humidity + "%";


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
    
    
    cardF.appendChild(tempF);
    cardF.appendChild(imgF);
    cardF.appendChild(imgDes);
    cardF.appendChild(hum);

    document.querySelector('div.currentW').appendChild(cardF);
  });