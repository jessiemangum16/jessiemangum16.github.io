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

function fiveWeekDays(){
    var d = new Date();
    var dOfWeek_abrev = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    for(let i=1; i<6; i++){
      let day = "today" + i;
      let weekday = d.getDay()+i;

      if(weekday > 6){
        weekday = weekday - 7;
        document.getElementById(day).innerHTML = dOfWeek_abrev[weekday];
      }else{
        document.getElementById(day).innerHTML = dOfWeek_abrev[weekday];
      }
    }
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




