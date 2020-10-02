/*
discountPercentage = 100 - ((sellingPrice*100)/listedPrice) 
*/

var sellingPrice = 199;
var listedPrice = 799;

var discountPercentage = 100 - (sellingPrice * 100) / listedPrice;

console.log(discountPercentage + "%");

var diaplayDiscountPercentage = Math.round(discountPercentage);

console.log(diaplayDiscountPercentage + "%");


