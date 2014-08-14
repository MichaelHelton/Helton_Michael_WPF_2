/**
 * Created by mikehelton on 8/14/14.
 */

//figuring the discount on an item

var regPrice = "$338.99"+ " Men's Sports Jacket";
console.log(regPrice);

var discountPrice = "55%"+ " off regular price";
console.log(discountPrice);

answer = (338.99 *.55);
console.log(answer+ " without tax added on");

answer = (338.99 * 0.07);
console.log(answer+ " tax to be added \"Since third number is higher than 5 round up");

answer = (338.99 + 23.73);
console.log(answer+ " with tax added on");


answer = (362.72 * .55);
console.log(answer+ " discount");

answer = (362.72 - 199.50);
console.log(answer+ " Price after discount");