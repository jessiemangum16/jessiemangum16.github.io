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
    var yearOutput = "&#169; " + cYear + "| Jessie Mangum | Utah |" + '<a href="https://www.byui.edu/online">BYUI Online Learning</a>';

    document.getElementById('cYear').innerHTML = yearOutput;
    document.getElementById('mod').innerHTML = date;
}