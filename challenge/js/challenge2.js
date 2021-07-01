function addLocation(){
    var aNewLocation = document.getElementById("new-Location-input").value;

    if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(aNewLocation)){
        var aTimeStamp = Date.now();
        var aLocation = {
            "id" : aTimeStamp,
            "Location" : aNewLocation
        }
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
        document.getElementById("new-Location").classList.remove("hide");
        
        for (var i = 0; i < allLocation.length; i++){
            var aLocation = allLocation[i];

            shortView(aLocation);
        }
    }
    
}

function singleLocation(id){
    console.log(id);

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
    const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?zip="+ aLocation["Location"] +"&units=imperial&appid=e2fd3a926cedd61c21791684dceb2f79";
    fetch(forecastApiURL)
    .then((response) => response.json())
    .then((jsForecast) => {
        if(jsForecast.cod == 200){
            var locationArray = jsForecast.list.filter(function( obj ) {
                return obj.dt_txt.includes("18:00:00");
            });

            //SHORT VIEW
            const item = document.getElementById("all_Location_display");
            item.innerHTML +=  
                    `<div class="locations" id="${aLocation.id}" onclick="singleLocation(${aLocation.id})">
                        <h4>${jsForecast.city.name}</h4>
                        <div>
                            <table>
                                <tr>
                                    <th>Day 1</th>
                                    <th>Day 2</th>
                                    <th>Day 3</th>
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
                        <div>
                            <button class="del" id="${aLocation.id}" onclick="del(${aLocation.id})">X</button>
                        </div>
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
}

function longView(aLocation){
    const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?zip="+ aLocation["Location"] +"&units=imperial&appid=e2fd3a926cedd61c21791684dceb2f79";
    fetch(forecastApiURL)
    .then((response) => response.json())
    .then((jsForecast) => {
        if(jsForecast.cod == 200){
            var locationArray = jsForecast.list.filter(function( obj ) {
                return obj.dt_txt.includes("18:00:00");
            });

            //LONG VIEW
            const item = document.getElementById("single-location");
            item.innerHTML +=  
                    `<div class="location-single" id="${aLocation.id}" onclick="singleLocation(${aLocation.id})">
                        <h4>${jsForecast.city.name}</h4>
                        <div>
                            <table>
                                <tr>
                                    <th>Day 1</th>
                                    <th>Day 2</th>
                                    <th>Day 3</th>
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

