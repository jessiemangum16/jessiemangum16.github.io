function lastModified() {
    var mod = "Last Modified: " + document.lastModified;
    var d = new Date();
    var cYear = d.getFullYear();
    var yearOutput = "&#169; " + cYear + "| Jessie Mangum | Utah |" + ' <a href="https://www.byui.edu/online">BYUI Online Learning</a>';

    document.getElementById('cYear').innerHTML = yearOutput;
    document.getElementById('mod').innerHTML = mod;
}

