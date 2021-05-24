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
    document.getElementById("tasks-left").value = "Tasks Left: " + allTask.length + 1;
} 

function deleteAll(){
    localStorage.clear();
}

function showAllTask(){
    var storedTaskString = localStorage["all_Task"];
    if(storedTaskString != null){
        var allTask = JSON.parse(storedTaskString);
        var TaskDisplayer = document.getElementById("all_Task_display");
        TaskDisplayer.innerHTML = null;

        for (var i = 0; i < allTask.length; i++){
            var aTask = allTask[i];
            checkMark = "";
            if (aTask.completed == false){
                checkMark = "&#9744";
                checkClass = 'class="no-border check-b"';
            }else if(aTask.completed == true){
                checkMark = "&#9745";
                checkClass = 'class="no-border check-b checked"';
            }
            TaskDisplayer.innerHTML += "<button type='button' "+ checkClass +"id='"+ aTask["id"] +"'>"+ checkMark +"</button>" 
                                        + "<p>" + aTask["task"] + "</p>" 
                                        + "<button type='button' class='no-border remove-b' id='"+ aTask["id"] +"'>X</button>";
        }
    }

    console.log(allTask);

    const removeButtons = document.querySelectorAll("button.remove-b");
    for (const removeButton of removeButtons){
        removeButton.addEventListener('click', function(e) {
            e.target.innerHTML = "delete";
        })
    }

    const checkButtons = document.querySelectorAll("button.check-b");
    for (const checkButton of checkButtons){
        checkButton.addEventListener('click', function(e) {
            console.log(e.target);
            e.target.innerHTML = "&#9745";
            
            targetID = e.target.id;
            console.log(targetID);
            for (var i = 0; i < allTask.length; i++){
                if (allTask[i].id == targetID){
                    allTask[i].completed = true;
                    localStorage.setItem("completed", "true");
                    console.log(allTask[i]);

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
                TaskDisplayer.innerHTML += "<button type='button' class='no-border check-b'>&#9744</button>" 
                                            + "<p>" + aTask["task"] + "</p>" 
                                            + "<button type='button' class='no-border remove-b'>X</button>";
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
                TaskDisplayer.innerHTML += "<button type='button' class='no-border check-b'>&#9744</button>" 
                                            + "<p>" + aTask["task"] + "</p>" 
                                            + "<button type='button' class='no-border remove-b'>X</button>";
            }
        }
    }
}


