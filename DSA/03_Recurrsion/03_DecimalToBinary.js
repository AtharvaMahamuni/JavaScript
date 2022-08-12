 // TODO: In this problem we have to convert the decimals to the binary number.


let num1 = 10;
let num2 = 11;
let num3 = 1293;

// FIXME: The conversion to string is required to concatenate the binary numbers
function decimalToBinary(num) {
    if(num<=1)
        return String(num)

    return (decimalToBinary(Math.floor(num/2)) + String(num%2))
}

console.log(decimalToBinary(num1));
console.log(decimalToBinary(num2));
console.log(decimalToBinary(num3));