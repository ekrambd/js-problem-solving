//7. Factorial

var factorial = function(n){
    if(n < 0) return "Invalid Input";
    if(n == 0 || n == 1) return 1;
    let result = n*(factorial(n-1));
    return result;
};

console.log(factorial(5));