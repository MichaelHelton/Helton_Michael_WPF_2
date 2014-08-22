/**
 * Created by mikehelton on 8/21/14.
 Conditionals-Personal*/

//finding out what the weather is like
var outWeather = prompt("Is it Clear or Raining?");
//if statement
if(outWeather == "Clear"){
    console.log("We will have practice today if the temperature isn't too high.");
//else statement
}else(outWeather == "Raining")
    console.log("Stay home today no practice.");

//finding out temperature
var outTemp = prompt("What is the temperature outside?");
//if statement
if(outTemp >=90){
    console.log("Sorry but it's too hot to practice today!");
//else statement
}else (outTemp <=89)
    console.log("We will pratice today!");
