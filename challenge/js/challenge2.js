function addLocation(){
    var aNewLocation = document.getElementById("new-Location-input").value;

    if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(aNewLocation)){
        var aTimeStamp = Date.now();
        var aLocation = {
            "id" : aTimeStamp,
            "Location" : aNewLocation
        }
        document.getElementById("msg").textContent = null;
        var allLocation = null;
        var storedLocationString = localStorage["all_Location"];
        if(storedLocationString == null){
            allLocation = [];
        }else{
            allLocation = JSON.parse(storedLocationString)
        }
        allLocation.push(aLocation);
        var allLocationString = JSON.stringify(allLocation);
        localStorage["all_Location"] = allLocationString;
        showAllLocation();
    }else{
        document.getElementById("msg").textContent = "Please input a valid Zip Code!"
    }

    document.getElementById("new-Location-input").value = null;
}

function showAllLocation(){
    var storedLocationString = localStorage["all_Location"];
    if(storedLocationString != null){
        var allLocation = JSON.parse(storedLocationString);
        var LocationDisplayer = document.getElementById("all_Location_display");
        LocationDisplayer.innerHTML = null;
        document.getElementById("single-view").classList.add("hide");
        document.getElementById("all_Location_display").classList.remove("hide");
        document.getElementById("new-L-block").classList.remove("hide");
        
        for (var i = 0; i < allLocation.length; i++){
            var aLocation = allLocation[i];

            shortView(aLocation);
        }
    }
    
}

function singleLocation(id){

    var storedLocationString = localStorage["all_Location"];
    if(storedLocationString != null){
        var allLocation = JSON.parse(storedLocationString);
        var singleDisplayer = document.getElementById("single-location");
        singleDisplayer.innerHTML = null;
        document.getElementById("all_Location_display").classList.add("hide");
        document.getElementById("single-view").classList.remove("hide");
        document.getElementById("new-L-block").classList.add("hide");
        
        for (var i = 0; i < allLocation.length; i++){
            var aLocation = allLocation[i];

            if(aLocation.id == id){
                longView(aLocation);
            }
        }
    }
}

function shortView(aLocation){
    const currentApiURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + aLocation["Location"] +"&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
    const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?zip="+ aLocation["Location"] +"&units=imperial&appid=e2fd3a926cedd61c21791684dceb2f79";
    fetch(forecastApiURL)
    .then((response) => response.json())
    .then((jsForecast) => {
        fetch(currentApiURL)
        .then((response) => response.json())
        .then((jsCurrent) => {
        if(jsForecast.cod == 200){
            var locationArray = jsForecast.list.filter(function( obj ) {
                return obj.dt_txt.includes("18:00:00");
            });
            //SHORT VIEW
            const item = document.getElementById("all_Location_display");
            item.innerHTML +=  
                    `<div class="short-location">
                        <div class="locations" id="${aLocation.id}" onclick="singleLocation(${aLocation.id})">
                            <h4>${jsForecast.city.name}</h4>
                            <div class="currentW">
                                <h4>Current</h4>
                                <p class="currentTemp">${jsCurrent.main.temp.toFixed(0)}\xB0 F </p>
                                <img src='https://openweathermap.org/img/w/${jsCurrent.weather[0].icon}.png' alt='${jsCurrent.weather[0].description}'>
                                <p class="currentDec">${jsCurrent.weather[0].description} </p>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <th>${weekdays(1)}</th>
                                        <th>${weekdays(2)}</th>
                                        <th>${weekdays(3)}</th>
                                    </tr>
                                    <tr>
                                        <td><img src='https://openweathermap.org/img/w/${locationArray[0].weather[0].icon}.png' alt='${locationArray[0].weather[0].description}'></td>
                                        <td><img src='https://openweathermap.org/img/w/${locationArray[1].weather[0].icon}.png' alt='${locationArray[1].weather[0].description}'></td>
                                        <td><img src='https://openweathermap.org/img/w/${locationArray[2].weather[0].icon}.png' alt='${locationArray[2].weather[0].description}'></td>
                                    </tr>
                                    <tr>
                                        <td><p>${locationArray[0].main.temp.toFixed(0)}\xB0 F</p></td>
                                        <td><p>${locationArray[1].main.temp.toFixed(0)}\xB0 F</p></td>
                                        <td><p>${locationArray[2].main.temp.toFixed(0)}\xB0 F</p></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <button class="del" id="${aLocation.id}" onclick="del(${aLocation.id})">X</button>
                    </div>`;
            
        }else{
            const item = document.getElementById("all_Location_display");
            item.innerHTML +=  
                    `<div class="locations">
                        <h4>${aLocation.Location}</h4>
                        <div>
                            <p>${jsForecast.message}</p>
                        </div>
                        <div>
                            <button class="del" id="${aLocation.id}" onclick="del(${aLocation.id})">X</button>
                        </div>
                    </div>`;
        }
    });
    });
    
}

function longView(aLocation){
    const currentApiURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + aLocation["Location"] +"&units=imperial&appid=159b64909a20d12c8a9f4243af9f627b";
    const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?zip="+ aLocation["Location"] +"&units=imperial&appid=e2fd3a926cedd61c21791684dceb2f79";
    fetch(forecastApiURL)
    .then((response) => response.json())
    .then((jsForecast) => {
        fetch(currentApiURL)
        .then((response) => response.json())
        .then((jsCurrent) => {
            if(jsForecast.cod == 200){
                var locationArray = jsForecast.list.filter(function( obj ) {
                    return obj.dt_txt.includes("18:00:00");
                });
                //LONG VIEW
                const item = document.getElementById("single-location");
                item.innerHTML +=  
                        `<div class="location-single" id="${aLocation.id}"">
                            <h3>${jsCurrent.name}</h3>
                            
                            <div>
                                <h4>Today</h4>
                                <p class="longTemp">Temp: ${jsCurrent.main.temp.toFixed(0)}\xB0 F ${jsCurrent.weather[0].description} <img src='https://openweathermap.org/img/w/${jsCurrent.weather[0].icon}.png' alt='${jsCurrent.weather[0].description}'></p>
                                <p>High: ${jsCurrent.main.temp_max.toFixed(0)}\xB0 F</p>
                                <p>Low: ${jsCurrent.main.temp_min.toFixed(0)}\xB0 F</p>
                                <p>Humidity: ${jsCurrent.main.humidity}%</p>
                                <p>Wind Speed: ${jsCurrent.wind.speed} mph</p>
                                <p>Sunrise: ${new Date(jsCurrent.sys.sunrise * 1000).toLocaleTimeString()}</p>
                                <p>Sunrise: ${new Date(jsCurrent.sys.sunset * 1000).toLocaleTimeString()}</p>
                            </div>
                            <div>
                            <hr>
                                <h4>5 Day Forecast</h4>
                                <table>
                                    <tr>
                                        <th>${weekdays(1)}</th>
                                        <th>${weekdays(2)}</th>
                                        <th>${weekdays(3)}</th>
                                        <th>${weekdays(4)}</th>
                                        <th>${weekdays(5)}</th>
                                    </tr>
                                    <tr>
                                        <td><img src='https://openweathermap.org/img/w/${locationArray[0].weather[0].icon}.png' alt='${locationArray[0].weather[0].description}'></td>
                                        <td><img src='https://openweathermap.org/img/w/${locationArray[1].weather[0].icon}.png' alt='${locationArray[1].weather[0].description}'></td>
                                        <td><img src='https://openweathermap.org/img/w/${locationArray[2].weather[0].icon}.png' alt='${locationArray[2].weather[0].description}'></td>
                                        <td><img src='https://openweathermap.org/img/w/${locationArray[3].weather[0].icon}.png' alt='${locationArray[2].weather[0].description}'></td>
                                        <td><img src='https://openweathermap.org/img/w/${locationArray[4].weather[0].icon}.png' alt='${locationArray[2].weather[0].description}'></td>
                                    </tr>
                                    <tr>
                                        <td><p>${locationArray[0].main.temp.toFixed(0)}\xB0 F</p></td>
                                        <td><p>${locationArray[1].main.temp.toFixed(0)}\xB0 F</p></td>
                                        <td><p>${locationArray[2].main.temp.toFixed(0)}\xB0 F</p></td>
                                        <td><p>${locationArray[3].main.temp.toFixed(0)}\xB0 F</p></td>
                                        <td><p>${locationArray[4].main.temp.toFixed(0)}\xB0 F</p></td>
                                    </tr>
                                </table>
                            </div>
                            <div>

                            </div>
                        </div>`;
                
            }else{
                const item = document.getElementById("single-location");
                item.innerHTML +=  
                        `<div class="locations">
                            <h4>${aLocation.Location}</h4>
                            <div>
                                <p>${jsForecast.message}</p>
                            </div>
                            <div>
                                <button class="del" id="${aLocation.id}" onclick="del(${aLocation.id})">X</button>
                            </div>
                        </div>`;
            }
        });
        });
}

function del(e){
    var storedLocationString = localStorage["all_Location"];
    
    if(storedLocationString != null){
        var allLocation = JSON.parse(storedLocationString);
        for (var i = 0; i < allLocation.length; i++){
            if (allLocation[i].id == e){

                allLocation.splice(i, 1);

                var allLocationString = JSON.stringify(allLocation);
                localStorage["all_Location"] = allLocationString;

                showAllLocation();
            }
        } 
    }else{
        console.log("remove error");
    }
}

function getTimeFromDate(timestamp) {
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
  
    var time = new Date();
    return time.setHours(hours, minutes);
  }

function weekdays(day){
    var d = new Date();
    var dOfWeek_abrev = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    let weekday = d.getDay()+day;
    if(weekday > 6){
        weekday = weekday - 7;
        return dOfWeek_abrev[weekday];
    }else{
        return dOfWeek_abrev[weekday];
    }
}