/**
 * Michael Helton
 * WPF Section 1
 * Function Industry
 */

//prompting user with how many changes will be made to website
var changes = prompt("How many changes will you have this month?");
console.log(changes);

//writing if statement
if(changes <= 10){
    console.log("That is included in the monthly fee.");
}else{
    console.log("It will be $35.00 per hour making all changes. Plus the normal monthly fee.");
}

//calculating the hours
var calcHours = prompt("Calculate what the cost will be by entering how many hours you think it will take.");
//totaling up what the user thinks and the amount per hour plus the normal monthly fee
total = (calcHours * 35 + 40);
//writing to the console
console.log("$" + total + " for this month.");
console.log("Thank you for your buiness!");