function addAndSaveCustomer(){
    var aFname = document.getElementById("fname_input").value;
    var aLname = document.getElementById("lname_input").value;
    var aPhone = document.getElementById("phone_input").value;
    var anEmail = document.getElementById("email_input").value;
    var aTeamMember = {
        "fname" : aFname,
        "lname" : aLname,
        "phone" : aPhone,
        "email" : anEmail
    }
    var allTeam = null;
    var storedTeamString = localStorage["all_team"];
    if(storedTeamString == null){
        allTeam = [];
    }else{
        allTeam = JSON.parse(storedTeamString)
    }
    allTeam.push(aTeamMember);
    var allTeamString = JSON.stringify(allTeam);
    localStorage["all_team"] = allTeamString;
    showAllTeam();

    document.getElementById("fname_input") = null;
    document.getElementById("lname_input") = null;
    document.getElementById("phone_input") = null;
    document.getElementById("email_input") = null;
}


function showAllTeam(){
    var storedTeamString = localStorage["all_team"];
    if(storedTeamString != null){
        var allTeam = JSON.parse(storedTeamString);
        var teamDisplayer = document.getElementById("all_team_display");
        teamDisplayer.innterHTML = null;
        var numberOfTeam = allTeam.length;
        for (var i = 0; i < allTeam.length; i++){
            var aTeamMember = allTeam[i];
            teamDisplayer.innerHTML += "<hr><p>Team Member: " + aTeamMember["fname"] + " " + aTeamMember["lname"] + "</p>" + 
                                        "<p>Phone Number: " + aTeamMember["phone"] + "</p>" + 
                                        "<p>Email: " + aTeamMember["email"] + "</p>" + 
        }
    }
}