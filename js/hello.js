/* send a customized message based on time */

console.log("I am in the hello.js")

var today = new Date();
var hoursNow = today.getHours();

// display the greeting messages
var greetings ="";
if(hoursNow<=12){
  greetings = "Good Morning"
}
else{
  greetings = "Good Afternoon"
}
// write to the document
document.write(greetings);