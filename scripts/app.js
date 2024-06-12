function saveTask(){
    console.log("Saving task");
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