function addTask(){
    var aNewTask = document.getElementById("new-task-input").value;
    var aTimeStamp = Date.now();
    var aTask = {
        "id" : aTimeStamp,
        "task" : aNewTask,
        "completed" : false
    }
    var allTask = null;
    var storedTaskString = localStorage["all_Task"];
    if(storedTaskString == null){
        allTask = [];
    }else{
        allTask = JSON.parse(storedTaskString)
    }
    allTask.push(aTask);
    var allTaskString = JSON.stringify(allTask);
    localStorage["all_Task"] = allTaskString;
    showAllTask();

    document.getElementById("new-task-input").value = null;
}

function showAllTask(){
    var storedTaskString = localStorage["all_Task"];
    if(storedTaskString != null){
        var allTask = JSON.parse(storedTaskString);
        var TaskDisplayer = document.getElementById("all_Task_display");
        TaskDisplayer.innerHTML = null;

        document.getElementById("tasks-left").innerHTML = "Tasks Left: " + allTask.length;

        for (var i = 0; i < allTask.length; i++){
            var aTask = allTask[i];
            checkMark = "";
            if (aTask.completed == false){
                checkMark = "&#9744";
                checkClass = 'class=""';
            }else if(aTask.completed == true){
                checkMark = "&#9745";
                checkClass = 'class="checked"';
            }
            TaskDisplayer.innerHTML += "<button type='button' class='no-border check-b' id='"+ aTask["id"] +"'>"+ checkMark +"</button>" 
                                        + "<p "+ checkClass +">" + aTask["task"] + "</p>" 
                                        + "<button type='button' class='no-border remove-b' id='"+ aTask["id"] +"'>X</button>";
        }
    }

    console.log(allTask);

    const removeButtons = document.querySelectorAll("button.remove-b");
    for (const removeButton of removeButtons){
        removeButton.addEventListener('click', function(e) {
            console.log("delete");

            targetID = e.target.id;
            for (var i = 0; i < allTask.length; i++){
                if (allTask[i].id == targetID){

                    allTask.splice(i, 1);

                    var allTaskString = JSON.stringify(allTask);
                    localStorage["all_Task"] = allTaskString;

                    showAllTask();
                }
            } 
        })
    }

    const checkButtons = document.querySelectorAll("button.check-b");
    for (const checkButton of checkButtons){
        checkButton.addEventListener('click', function(e) {            
            targetID = e.target.id;
            for (var i = 0; i < allTask.length; i++){
                if (allTask[i].id == targetID){
                    allTask[i].completed = true;

                    var allTaskString = JSON.stringify(allTask);
                    localStorage["all_Task"] = allTaskString;

                    showAllTask();
                }
            } 
        })
    }

}

function showActiveTask(){
    var storedTaskString = localStorage["all_Task"];
    if(storedTaskString != null){
        var allTask = JSON.parse(storedTaskString);
        var TaskDisplayer = document.getElementById("all_Task_display");
        TaskDisplayer.innerHTML = null;

        for (var i = 0; i < allTask.length; i++){
            var aTask = allTask[i];

            if(aTask["completed"] == false){
                checkMark = "";
                if (aTask.completed == false){
                    checkMark = "&#9744";
                    checkClass = 'class=""';
                }else if(aTask.completed == true){
                    checkMark = "&#9745";
                    checkClass = 'class="checked"';
                }
                TaskDisplayer.innerHTML += "<button type='button' class='no-border check-b' id='"+ aTask["id"] +"'>"+ checkMark +"</button>" 
                                            + "<p "+ checkClass +">" + aTask["task"] + "</p>" 
                                            + "<button type='button' class='no-border remove-b' id='"+ aTask["id"] +"'>X</button>";
            }
        }
    }
}

function showCompletedTask(){
    var storedTaskString = localStorage["all_Task"];
    if(storedTaskString != null){
        var allTask = JSON.parse(storedTaskString);
        var TaskDisplayer = document.getElementById("all_Task_display");
        TaskDisplayer.innerHTML = null;

        for (var i = 0; i < allTask.length; i++){
            var aTask = allTask[i];

            if(aTask["completed"] == true){
                checkMark = "";
                if (aTask.completed == false){
                    checkMark = "&#9744";
                    checkClass = 'class=""';
                }else if(aTask.completed == true){
                    checkMark = "&#9745";
                    checkClass = 'class="checked"';
                }
                TaskDisplayer.innerHTML += "<button type='button' class='no-border check-b' id='"+ aTask["id"] +"'>"+ checkMark +"</button>" 
                                            + "<p "+ checkClass +">" + aTask["task"] + "</p>" 
                                            + "<button type='button' class='no-border remove-b' id='"+ aTask["id"] +"'>X</button>";
            }
        }
    }
}


