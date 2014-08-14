/**
 * Created by mikehelton on 8/14/14.
 Expressions_Personal */

//finding the square footage of a room
var roomWidth = prompt ("What is the width of your room?");
console.log(roomWidth);

//finding the length of the room
var roomLength = prompt ("What is the length of your room?");
console.log(roomLength);

//the square footage of the room
answer = roomWidth * roomLength + " square feet";
console.log(answer);

//Alerting the user with the square footage of the room
alert (roomWidth * roomLength + " square feet");
document.write(answer);