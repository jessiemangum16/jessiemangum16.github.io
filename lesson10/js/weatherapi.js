

const apiURL = "api.openweathermap.org/data/2.5/weather?id={5604473}&appid={159b64909a20d12c8a9f4243af9f627b}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });