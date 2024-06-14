function saveTask(){
    console.log("Saving task");
    //get the values
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, description, color, date, status, budget);

    //build the object
    let taskToSave = new Task(title, description, color, date, status, budget);
    console.log(taskToSave);

    //save to server



    //display the info from the server
    displayTask(taskToSave);

    //try to creare a function that clears all the inputs at the moment of executong the save task
    
}

function displayTask(task){

    let syntax = 
    `
    <div class='task'>
        <div class='info'>
            <h3>${task.title}</h3>
            <h5>${task.description}</h5>
        </div>
        <label class="status">${task.status}</label>
        <div class="date-budget">
            <label>${task.date}</label>
            <label>${task.budget}</label>
        </div>
    </div>
    `
    $(".list-task").append(syntax);
    //complete the rest of the inputs



}

function init(){
    console.log("task manager")


    //load data


    //hook the events
    $("#btnSave").click(saveTask);
}


window.onload = init;



































// function sayHello(){
//     console.log("Hello there")
// }

// function sayGoodbye(){
//     console.log("Bye Bye")
// }

// function init(){
//     console.log("hello world");
//     sayHello()
//     sayGoodbye()
// }


// //testing for change
// window.onload = init;