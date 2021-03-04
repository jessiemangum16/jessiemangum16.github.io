/*************************** TOGGLE MENU ***************************/
function toggleMenu(){
    console.log(document.getElementById("top-menu").classList);
    document.getElementById("top-menu").classList.toggle("hide");
}

/*************************** LAST MODIFIED/CURRENT YEAR ***************************/
function lastModified() {
    var d = new Date();

    var dOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var date = `${dOfWeek[d.getDay()]}, ${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`;
    var cYear = d.getFullYear();
    var yearOutput = "&#169; " + cYear + "| Jessie Mangum | Utah | " + '<a href="https://www.byui.edu/online">BYUI Online Learning</a>';

    document.getElementById('cYear').innerHTML = yearOutput;
    document.getElementById('mod').innerHTML = date;
}

/*************************** WIND CHILL ***************************/
function windChill(){

    var tempF = 45;
    var speed = 15;
    var chill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * tempF * Math.pow(speed,0.16));

    chill = Math.round(chill * 1) / 1;

    document.getElementById('windChill').innerHTML = chill;

    document.getElementById('temp').innerHTML = tempF;
    document.getElementById('windSpeed').innerHTML = speed;
}

/*************************** SHOW TOP TEXT ON FRIDAY ***************************/
function showFri() {
    var d = new Date();

    if (d.getDay()==5){
        document.getElementById("show-fri").style.display = "block";
    }else{
        document.getElementById("show-fri").style.display = "none";
    }
}

/*************************** LAZY LOAD ***************************/
let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);
    
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

  function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectRegion');
	s.style.display = "block";
	s.textContent = sel.value;
	
}

/*************************** HOME PAGE TOWN DATA ***************************/
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const townsA = [5, 1, 6]
    for (let i = 0; i < townsA.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h4 = document.createElement('h4');
        let h3_1 = document.createElement('p');
        let h3_2 = document.createElement('p');
        let h3_3 = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = towns[townsA[i]].name;
        h4.textContent = '"' + towns[townsA[i]].motto + '"';
        h3_1.textContent = 'Year Founded: ' + towns[townsA[i]].yearFounded;
        h3_2.textContent = 'Population: ' + towns[townsA[i]].currentPopulation;
        h3_3.textContent = 'Annual Rainfall: ' + towns[townsA[i]].averageRainfall + '"';
        img.setAttribute('src', 'images/' + towns[townsA[i]].photo);
        img.setAttribute('alt', towns[townsA[i]].name + 'photo');

        card.appendChild(h2);
        card.appendChild(h4);
        card.appendChild(h3_1);
        card.appendChild(h3_2);
        card.appendChild(h3_3);
        card.appendChild(img);

        document.querySelector('div.towns').appendChild(card);
        

        
    }
  });


