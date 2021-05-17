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

function removeTask(){

}
   

function showAllTask(){
    var storedTaskString = localStorage["all_Task"];
    if(storedTaskString != null){
        var allTask = JSON.parse(storedTaskString);
        var TaskDisplayer = document.getElementById("all_Task_display");
        TaskDisplayer.innterHTML = null;

        for (var i = 0; i < allTask.length; i++){
            var aTask = allTask[i];
            TaskDisplayer.innerHTML += "<button type='button' class='no-border' onclick='checkTask()'>&#9744</button>" 
                                        + "<p>" + aTask["task"] + "</p>" 
                                        + "<button type='button' id='remove-button' class='no-border' onclick='removeTask()'>X</button>";
        }
    }
}

function showActiveTask(){
    var storedTaskString = localStorage["all_Task"];
    if(storedTaskString != null){
        var allTask = JSON.parse(storedTaskString);
        var TaskDisplayer = document.getElementById("all_Task_display");
        TaskDisplayer.innterHTML = null;

        for (var i = 0; i < allTask.length; i++){
            var aTask = allTask[i];

            if()
            TaskDisplayer.innerHTML += "<button type='button' class='no-border' onclick='checkTask()'>&#9744</button>" 
                                        + "<p>" + aTask["task"] + "</p>" 
                                        + "<button type='button' id='remove-button' class='no-border' onclick='removeTask()'>X</button>";
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
            TaskDisplayer.innerHTML += "<button type='button' class='no-border' onclick='checkTask()'>&#9744</button>" 
                                        + "<p>" + aTask["task"] + "</p>" 
                                        + "<button type='button' id='remove-button' class='no-border' onclick='removeTask()'>X</button>";
        }
    }
}
