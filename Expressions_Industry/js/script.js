/**
 * Created by mikehelton on 8/14/14.
 Expressions_Industry */

//prompting user for the dpi
var dPerInch = prompt("What dpi is your image?");
console.log(dPerInch);

//prompting for the ppi
var pPerInch = prompt("What are the ppi of the image?");
console.log(pPerInch);

//answering how many rows and dots there are per pixel
answer = dPerInch / pPerInch + " Pixels = Rows and Dots per pixel";
console.log(answer);

//Alert the customer
alert(dPerInch/pPerInch + " Pixels = Rows and Dots per pixel");
