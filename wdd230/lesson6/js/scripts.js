function toggleMenu(){
    console.log(document.getElementById("top-menu").classList);
    document.getElementById("top-menu").classList.toggle("hide");
}

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

function windChill(){

    var tempF = 45;
    var speed = 15;
    var chill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * tempF * Math.pow(speed,0.16));

    chill = Math.round(chill * 1) / 1;

    document.getElementById('windChill').innerHTML = chill;

    document.getElementById('temp').innerHTML = tempF;
    document.getElementById('windSpeed').innerHTML = speed;
}
function showFri() {
    var d = new Date();

    if (d.getDay()==5){
        document.getElementById("show-fri").style.display = "block";
    }else{
        document.getElementById("show-fri").style.display = "none";
    }
}