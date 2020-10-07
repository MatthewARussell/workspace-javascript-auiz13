/* send a customized message based on time */

console.log("I am in the hello.js")

var today = new date();
var hoursNow = today.getHours();

// display the greeting messages
var greeting ="";
if(hoursNow<=12){
  grettings = "Good Morning"
}
else{
  greetings = "Good Afternoon"
}
// write to the document
document.write(grettings);