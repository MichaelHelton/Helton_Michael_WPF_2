/**
 * Created by mikehelton on 8/14/14.
 */

//weekly grocery bills for 5 months
var myArray = new Array();
myArray[0] = "$123.23";
myArray[1] = "$188.33";
myArray[2] = "$134.08";
myArray[3] = "$197.34";
myArray[4] = "$183.03";

console.log("Week 1 = " + myArray[0]);
console.log("Week 2 = " + myArray[1]);
console.log("Week 3 = " + myArray[2]);
console.log("Week 4 = " + myArray[3]);
console.log("Week 5 = " + myArray[4]);

//adding my weekly grocery bill to find my average

var Total = (123.23+188.33+134.08+197.34+183.03);
console.log(Total+ " Total spent on groceries in 5 weeks.");

answer = (Total / 5+ " Average spent per week.");
console.log(answer);