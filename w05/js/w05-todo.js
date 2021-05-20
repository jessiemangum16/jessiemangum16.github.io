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

function showAllTask(){
    var storedTaskString = localStorage["all_Task"];
    if(storedTaskString != null){
        var allTask = JSON.parse(storedTaskString);
        var TaskDisplayer = document.getElementById("all_Task_display");
        TaskDisplayer.value = null;

        for (var i = 0; i < allTask.length; i++){
            var aTask = allTask[i];
            TaskDisplayer.innerHTML += "<button type='button' class='no-border check-b'>&#9744</button>" 
                                        + "<p>" + aTask["task"] + "</p>" 
                                        + "<button type='button' class='no-border remove-b'>X</button>";
        }
    }

    const removeButtons = document.querySelectorAll("button.remove-b");
    for (const removeButton of removeButtons){
        removeButton.addEventListener('click', function(e) {
            e.target.innerHTML = "delete";
        })
    }

    const checkButtons = document.querySelectorAll("button.check-b");
    for (const checkButton of checkButtons){
        checkButton.addEventListener('click', function(e) {
            e.target.innerHTML = "&#9745";
            e.target.aTask["completed"] = true;
        })
    }

}

function showActiveTask(){
    var storedTaskString = localStorage["all_Task"];
    if(storedTaskString != null){
        var allTask = JSON.parse(storedTaskString);
        var TaskDisplayer = document.getElementById("all_Task_display");
        TaskDisplayer.value = null;

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
        TaskDisplayer.innterHTML = null;

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


