

// const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

// var element = document.createElement ("h1"); 
// element.textContent = "Hello World"
// document.body.append(element) 


// for (i = 0; i < 10; i++) {
//     var element = document.createElement ("h1"); 
// element.textContent = "Hello World"
// document.body.append(element)
// }
const names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily"]
console.log(names)
for (i = 0; i < Object.values(names).length; i++){
    var heading1 = document.createElement("h1")
    document.body.append(heading1)
    heading1.textContent = Object.values(names)[i]
    heading1.style.fontSize= "25 px"
    heading1.style.color = "purple"
    heading1.style.fontWeight= "lighter"
    heading1.style.fontFamily= "lucidaSans"
}



// function visual(){
//     for (i = 0; i < 10; i++) {
//         var element = document.createElement ("h1"); 
//     element.textContent = "Hello World"
//     document.body.append(element)
//     }
// }
// visual()
// console.log()



// Using a for-loop, repeat this process 10 times so that 10 h1’s with the text “Hello World” show up when the website is visited.  
// Copy this array above your for-loop:
// const names = [“steve”, “larry”, “joe”, “shirley”, “steph”, “nate”, “rick”, “emily”]
// Adjust your for-loop to now loop through the length of the array. 
// You should now see 8 “Hello World” h1s show up when the page loads.
// Instead of using “Hello World” as the text, swap it for the current name in the array so that all of the names now list out on the website.
// Add styles to the h1’s.