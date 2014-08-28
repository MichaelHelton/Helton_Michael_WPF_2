/**
 * Michael Helton
 * WPF Section 1
 * Functions Personal
 */

//prompting user for room width
var width = prompt("What is the width of your room?");
//writing to console
console.log(width);

//function
function calcRoom(){
    //prompting user for the length of room
    var length = prompt("What is the length of your room?");
    //writing to the console
    console.log(length);
    //calculating room size
    var calcRoom = (width * length);
    console.log("You have " + calcRoom + " square feet in this room.");
}

//running function
calcRoom(width);

//prompting for square footage user has
var sqFt = prompt("How many square feet do you have?");
var price;

//letting the user see how much it will cost per square foot for tile to be installed
price = (sqFt > 400) ? "It will cost $3.00 per square foot to install tile in this room" : "It will cost $4.00 per square foot to install tile in this room.";
//writing to the console
console.log(price);
//writing to the document
document.write(price);
