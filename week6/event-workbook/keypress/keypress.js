  
/* Your task is to display to the user the key and key code they press.
Example of output: You've pressed the "a" key. It's key code is 65.
Wes Bos made this https://keycode.info/ for us to use as an example. */



document.addEventListener("keypress", function(event){
    //console.log("hello")
    var input = document.getElementById("output") //.textContent = e.target.value
    var x = event.keyCode;
    console.log("keypress")
}) 

 







// event.which
// event.key