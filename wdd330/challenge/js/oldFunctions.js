function shortView(aLocation){
    const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?zip="+ aLocation["Location"] +"&units=imperial&appid=e2fd3a926cedd61c21791684dceb2f79";
    fetch(forecastApiURL)
    .then((response) => response.json())
    .then((jsForecast) => {
        console.log("Building Data!!");
        if(jsForecast.cod == 200){
            var locationArray = jsForecast.list.filter(function( obj ) {
                return obj.dt_txt.includes("18:00:00");
            });

            //3 DAY FORECAST
            
            let locationCard = document.createElement('section');
            let locationName = document.createElement('p');
            let card1 = document.createElement('section');
            let card2 = document.createElement('section');
            let card3 = document.createElement('section');
            let h4_1 = document.createElement('h4');
            let h4_2 = document.createElement('h4');
            let h4_3 = document.createElement('h4');
            let temp1 = document.createElement('p');
            let temp2 = document.createElement('p');
            let temp3 = document.createElement('p');
            let img1 = document.createElement('img');
            let img2 = document.createElement('img');
            let img3 = document.createElement('img');
            let del = document.createElement('button');

            locationCard.classList.add("locations");
            locationName.textContent = jsForecast.city.name;

            h4_1.id = "today1";
            h4_1.textContent = "Day 1";
            temp1.textContent = locationArray[0].main.temp.toFixed(0) + "\xB0 F";
            img1.setAttribute('src', 'https://openweathermap.org/img/w/' + locationArray[0].weather[0].icon + '.png');
            img1.setAttribute('alt', locationArray[0].weather[0].description);

            h4_2.id = "today2";
            h4_2.textContent = "Day 2";
            temp2.textContent = locationArray[1].main.temp.toFixed(0) + "\xB0 F";
            img2.setAttribute('src', 'https://openweathermap.org/img/w/' + locationArray[1].weather[0].icon + '.png');
            img2.setAttribute('alt', locationArray[1].weather[0].description);

            h4_3.id = "today3";
            h4_3.textContent = "Day 3";
            temp3.textContent = locationArray[2].main.temp.toFixed(0) + "\xB0 F";
            img3.setAttribute('src', 'https://openweathermap.org/img/w/' + locationArray[2].weather[0].icon + '.png');
            img3.setAttribute('alt', locationArray[2].weather[0].description);

            del.textContent = "X";
            del.classList.add("del");  
            del.id = aLocation.id;
            console.log(del.id);
            
            card1.appendChild(h4_1);
            card1.appendChild(img1);
            card1.appendChild(temp1);

            card2.appendChild(h4_2);
            card2.appendChild(img2);
            card2.appendChild(temp2);

            card3.appendChild(h4_3);
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
            del.id = aLocation["id"];

            locationCard.appendChild(errorMsg);
            locationCard.appendChild(del);

            document.getElementById("all_Location_display").appendChild(locationCard);
        }
    });
}


function removeLocation(){
    console.log("running remove!!");
    var storedLocationString = localStorage["all_Location"];
    
    if(storedLocationString != null){
        var allLocation = JSON.parse(storedLocationString);

        const removeButtons = Array.from(document.querySelectorAll(".del"));
        console.log(removeButtons);

        removeButtons.forEach(remove => {
            remove.addEventListener('click', function(e) {
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
        })
    }else{
        console.log("remove error");
    }
}

function locationListener(){
    const locationArray = Array.from(document.querySelectorAll("section.locations"));
    //console.log(locationArray);
    locationArray.forEach(child => {
      child.addEventListener('click', e => {
        this.singleLocation(e.currentTarget.dataset.id);
      });
    });
}