/**
 * Created by mikehelton on 8/14/14.
 Expressions_Wacky
 */

//Converting room width and length into square feet and then into how many tile it will take to tile the room
//prompting user to input room width
var roomWidth = prompt("What is the width of your room?");
console.log(roomWidth);


//prompting user to input room length
var roomLength = prompt("What is the length of your room?");
console.log(roomLength);


//answer of how many square feet you have
answer = (roomWidth * roomLength+ " square feet");
console.log(answer);

//alert the tile sizes to choose from
alert ("Tile sizes to choose from are 2, 4, 6, 8, 10, 12, 18 & 24");

//converting to tile size being used to tile room
var tileSize = [2, 4, 6, 8, 10, 12, 18, 24];
tileSize = prompt("What is the size of your tile?");
answer = (roomWidth * roomLength * 12 / tileSize);
console.log(answer+ " tile needed to complete this project");
document.write(answer+ " tile needed to complete this project");
alert (answer+ " tile needed to complete this project");




