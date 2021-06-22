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
        console.log(allLocation);
        var LocationDisplayer = document.getElementById("all_Location_display");
        LocationDisplayer.innerHTML = null;

        

        for (var i = 0; i < allLocation.length; i++){
            var aLocation = allLocation[i];

            const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?zip="+ aLocation["Location"] +"&units=imperial&appid=e2fd3a926cedd61c21791684dceb2f79";
            fetch(forecastApiURL)
            .then((response) => response.json())
            .then((jsForecast) => {
                console.log(jsForecast);

                if(jsForecast.cod == 200){
                    var locationArray = jsForecast.list.filter(function( obj ) {
                        return obj.dt_txt.includes("18:00:00");
                    });

                    console.log(locationArray);

                    //3 DAY FORECAST
                    
                    let locationCard = document.createElement('section');
                    let locationName = document.createElement('p');
                    let card1 = document.createElement('section');
                    let card2 = document.createElement('section');
                    let card3 = document.createElement('section');
                    let h2_1 = document.createElement('h2');
                    let h2_2 = document.createElement('h2');
                    let h2_3 = document.createElement('h2');
                    let temp1 = document.createElement('p');
                    let temp2 = document.createElement('p');
                    let temp3 = document.createElement('p');
                    let img1 = document.createElement('img');
                    let img2 = document.createElement('img');
                    let img3 = document.createElement('img');
                    let del = document.createElement('button');

                    locationCard.classList.add("locations");
                    locationName.textContent = jsForecast.city.name;

                    h2_1.id = "today1";
                    h2_1.textContent = "Day 1";
                    temp1.textContent = locationArray[0].main.temp.toFixed(0) + "\xB0 F";
                    img1.setAttribute('src', 'https://openweathermap.org/img/w/' + locationArray[0].weather[0].icon + '.png');
                    img1.setAttribute('alt', locationArray[0].weather[0].description);

                    h2_2.id = "today2";
                    h2_2.textContent = "Day 2";
                    temp2.textContent = locationArray[1].main.temp.toFixed(0) + "\xB0 F";
                    img2.setAttribute('src', 'https://openweathermap.org/img/w/' + locationArray[1].weather[0].icon + '.png');
                    img2.setAttribute('alt', locationArray[1].weather[0].description);

                    h2_3.id = "today3";
                    h2_3.textContent = "Day 3";
                    temp3.textContent = locationArray[2].main.temp.toFixed(0) + "\xB0 F";
                    img3.setAttribute('src', 'https://openweathermap.org/img/w/' + locationArray[2].weather[0].icon + '.png');
                    img3.setAttribute('alt', locationArray[2].weather[0].description);

                    del.textContent = "X";
                    del.classList.add("del");  
                    del.classList.add("remove-b");               
                    
                    card1.appendChild(h2_1);
                    card1.appendChild(img1);
                    card1.appendChild(temp1);

                    card2.appendChild(h2_2);
                    card2.appendChild(img2);
                    card2.appendChild(temp2);

                    card3.appendChild(h2_3);
                    card3.appendChild(img3);
                    card3.appendChild(temp3);

                    locationCard.appendChild(locationName);
                    locationCard.appendChild(card1);
                    locationCard.appendChild(card2);
                    locationCard.appendChild(card3);
                    locationCard.appendChild(del);

                    document.getElementById("all_Location_display").appendChild(locationCard);
                }else{
                    let locationCard = document.createElement('section');
                    let errorMsg = document.createElement('p');
                    let del = document.createElement('button');

                    locationCard.classList.add()
                    errorMsg.textContent = jsForecast.message;

                    del.textContent = "X";
                    del.classList.add("del"); 
                    del.classList.add("remove-b");  

                    locationCard.appendChild(errorMsg);
                    locationCard.appendChild(del);

                    document.getElementById("all_Location_display").appendChild(locationCard);
                }
            });
        }
    }

    removeLocation();
}

function removeLocation(){
    var storedLocationString = localStorage["all_Location"];

    if(storedLocationString != null){
        var allLocation = JSON.parse(storedLocationString);

        const removeButtons = document.querySelectorAll("button.remove-b");

        console.log(removeButtons);
        for (const removeButton of removeButtons){
            removeButton.addEventListener('click', function(e) {
                console.log(e.target);
                targetID = e.target.id;
                for (var i = 0; i < allLocation.length; i++){
                    if (allLocation[i].id == targetID){

                        allLocation.splice(i, 1);

                        var allLocationString = JSON.stringify(allLocation);
                        localStorage["all_Location"] = allLocationString;

                        showAllLocation();
                    }
                } 
            })
        }
    }
}

function fiveWeekDays(){
    var d = new Date();
    var dOfWeek_abrev = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    for(let i=1; i<4; i++){
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



