function addLocation(){
    var aNewLocation = document.getElementById("new-Location-input").value;
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

    document.getElementById("new-Location-input").value = null;
}

function removeLocation(){
    var storedLocationString = localStorage["all_Location"];

    if(storedLocationString != null){
        var allLocation = JSON.parse(storedLocationString);

        const removeButtons = document.querySelectorAll("button.remove-b");
        for (const removeButton of removeButtons){
            removeButton.addEventListener('click', function(e) {

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


function showAllLocation(){
    var storedLocationString = localStorage["all_Location"];
    if(storedLocationString != null){
        var allLocation = JSON.parse(storedLocationString);
        var LocationDisplayer = document.getElementById("all_Location_display");
        LocationDisplayer.innerHTML = null;

        var LocationLeft = 0;
        for (var i = 0; i < allLocation.length; i++){
            var aLocation = allLocation[i];
            
            LocationDisplayer.innerHTML += "<p>" + aLocation["Location"] + "</p>" 
                                        + "<button type='button' class='no-border remove-b' id='"+ aLocation["id"] +"'>X</button>";
        }
    }

    removeLocation();
}






