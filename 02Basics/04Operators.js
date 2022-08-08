// There are different operators present in JavaScript which are used to do various tasks of computation.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
// var num1 = 7;
// var num2 = 6;
// console.log(num1 * num2);
// Here '*' is a operator

/*
We want to build the functionality which will calculate the discount percentage with given formula.

// discountPrice = (listPrice - sellingPrice)/listPrice * 100

discountPercentage = 100 - ((sellingPrice*100)/listedPrice) 
*/

var sellingPrice = 199;
var listedPrice = 799;

var discountPercentage = ((listedPrice - sellingPrice)/ listedPrice) * 100;

// var discountPercentage = 100 - (sellingPrice * 100) / listedPrice;

console.log(discountPercentage + "%");

// Math.round() is used to roundoff the values
var diaplayDiscountPercentage = Math.round(discountPercentage);

// After roundoff
console.log(diaplayDiscountPercentage + "% off");


