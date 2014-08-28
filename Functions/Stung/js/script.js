/**
 * Created by mikehelton on 8/28/14.
 Stung
 */

//writing to the console and alerting user of how mmany bee stings it takes to kill an animal
console.log("It takes 8.666666667 bee stings per pound to kill an animal.");
alert("It takes 8.666666667 bee stings per pound to kill an animal.");

//prompting user for weight of their animal
var weight = prompt("How much does your animal weigh?");

//writing the function to calculate weight of animal and stings
function calcStings(){
    var beeStings = 8.666666667;
    var calcStings = (weight * beeStings);
    //writing to the console
    console.log("It would take " + calcStings + " bee stings to kill the animal.");
    
}