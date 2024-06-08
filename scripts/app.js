function sayHello(){
    console.log("Hello there")
}

function sayGoodbye(){
    console.log("Bye Bye")
}

function init(){
    console.log("hello world");
    sayHello()
    sayGoodbye()
}


//testing for change
window.onload = init;