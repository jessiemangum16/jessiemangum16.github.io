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

        document.getElementById("task-active").classList.remove("current");
        document.getElementById("task-completed").classList.remove("current");
        document.getElementById("task-all").classList.add("current");

        var taskLeft = 0;
        for (var i = 0; i < allTask.length; i++){
            var aTask = allTask[i];
            
            checkMark = "";
            if (aTask.completed == false){
                checkMark = "&#9744";
                checkClassP = 'class=""';
                checkClassButton = 'class = "no-border check-b"';
                taskLeft++;
                document.getElementById("tasks-left").innerHTML = "Tasks Left: " + taskLeft;
            }else if(aTask.completed == true){
                checkMark = "&#9745";
                checkClassP = 'class="checked"';
                checkClassButton = 'class = "no-border checked-b"';
            }
            TaskDisplayer.innerHTML += "<button type='button' "+ checkClassButton +" id='"+ aTask["id"] +"'>"+ checkMark +"</button>" 
                                        + "<p "+ checkClassP +">" + aTask["task"] + "</p>" 
                                        + "<button type='button' class='no-border remove-b' id='"+ aTask["id"] +"'>X</button>";
        }
    }

    console.log(allTask);

    const removeButtons = document.querySelectorAll("button.remove-b");
    for (const removeButton of removeButtons){
        removeButton.addEventListener('click', function(e) {

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

    const checkedButtons = document.querySelectorAll("button.checked-b");
    for (const checkedButton of checkedButtons){
        checkedButton.addEventListener('click', function(e) {            
            targetID = e.target.id;
            for (var i = 0; i < allTask.length; i++){
                if (allTask[i].id == targetID){
                    allTask[i].completed = false;

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

        document.getElementById("task-all").classList.remove("current");
        document.getElementById("task-completed").classList.remove("current");
        document.getElementById("task-active").classList.add("current");

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

        document.getElementById("task-all").classList.remove("current");
        document.getElementById("task-active").classList.remove("current");
        document.getElementById("task-completed").classList.add("current");

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


