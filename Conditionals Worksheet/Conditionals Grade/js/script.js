/**
 * Created by mikehelton on 8/21/14.
 */

//Grade letter Calculator

//asking for grade
var grade = parseFloat(prompt("What is your number grade?"));
//if grade is this
if (grade >= 100){
    //writing to the console
    console.log(grade + "%" + " You have earned an A+ in this class!");
//else if grade is this
}else if (grade >= 90){
    //writing to console
    console.log(grade + "%" + " You have earned an A in this class!");
//else if grade is this
}else if (grade >= 80){
    console.log(grade + "%" + " You have earned an B in this class!");
//else if grade is this
}else if (grade >=70){
    //writing to console
    console.log(grade + "%" + " You have earned an C in this class!");
}