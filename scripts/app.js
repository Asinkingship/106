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
    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",

        //here i need to create the logic to define that i what to send the taskToSave object
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        
        //////////
        success: function(response){
            console.log(response);
            displayTask(taskToSave);
        },
        error: function(error){
            console.log(error);
        }
    });

    //just render the messages that comes from your user






    //display the info from the server

    //try to creare a function that clears all the inputs at the moment of executong the save task
    
}

function loadTask(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function(response)
        {
            let data = JSON.parse(response);
            for(let i=0; i<data.length; i++)
            {
                let task = data[i];  // get the object
                if (task.name=="KB") // if the name is the same as the
                {
                    displayTask(task); //render it
                }
            }
        },
        error: function(error)
        {
            console.log(error);
        }
    });
    //please fo this
    //get the data from the http://fsdiapi.azurewebsites.net/api/tasks
    //console.log the results

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

function testRequest(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net",
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function init(){
    console.log("task manager")


    //load data
    loadTask()
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