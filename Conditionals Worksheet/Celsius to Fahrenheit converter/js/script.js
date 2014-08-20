/**
 * Created by mikehelton on 8/20/14.
 */
//Celsuis to Fahrenheit converter/

//prompt user to enter temperature to convert
var C = prompt ("What temperature would you like to convert to Fahrenheit?");
answer = (C * 9 / 5 + 32 + " Degrees Fahrenheit");

//alerting the user with the answer
alert(C + " Degrees Celsius is " + answer);
console.log(answer);

//prompt user for Fahrenheit temperature to convert
var F = prompt ("What temperature would you like to convert to Celsius?");
answer = ((F - 32) * 5/9 + " Degrees Celsuis");

//alerting the user with the answer
alert(F + " Degrees Fahrenheit is " + answer);
console.log(answer);