
function sum(num1) {
    return function(num2) {
        if(num2)
            return sum(num1+num2)
        return num1
    }
}


var fun = sum(2)(3)(4)(5)(6)(7)();
console.log(fun);