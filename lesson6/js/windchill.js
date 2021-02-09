function doInputOutput(){

    var tempF = parseFloat(document.getElementById('temp').value);
    var speed = parseFloat(document.getElementById('windSpeed').value);
    var chill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * tempF * Math.pow(speed,0.16));

    chill = Math.round(chill * 100) / 100;

    document.getElementById('windChill').innerHTML = chill;

}