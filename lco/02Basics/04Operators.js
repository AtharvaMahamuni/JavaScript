// var num1 = 7;
// var num2 = 6;
// console.log(num1 * num2);
// Here '*' is a operator



/*
We want to build the functionality which will calculate the discount percentage with given 
formula.

// discountPrice = (listPrice - sellingPrice)/listPrice * 100

discountPercentage = 100 - ((sellingPrice*100)/listedPrice) 
*/


var sellingPrice = 199;
var listedPrice = 799;

var discountPercentage = ((listedPrice - sellingPrice)/ listedPrice) * 100;

// var discountPercentage = 100 - (sellingPrice * 100) / listedPrice;

console.log(discountPercentage + "%");

// Math.round() is used to roundoff the values after the point
var diaplayDiscountPercentage = Math.round(discountPercentage);

console.log(diaplayDiscountPercentage + "% off");


