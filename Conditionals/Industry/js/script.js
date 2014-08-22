/**
 * Created by mikehelton on 8/21/14.
Conditionals - industry */

//how many pages
var numOfPage = prompt("How many pages do you need for your site?");

//if statement
if (numOfPage >10){
    //writing to console
    console.log("Price increases to $65 per page above 10 pages");
}else{
    console.log("Price is $50 per page for 10 pages");
}

//How many images
var numOfImage = prompt("How many images will be on the website?");
//if statement
if(numOfImage > 10){
    console.log("Price increases $5 per image above 10 images");

}else{
    console.log("Price includes 10 images");
}
