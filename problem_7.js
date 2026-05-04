//7. Factorial

var factorial = function(num){
    if(num < 0) return "Invalid Input";
    let result = 1;
    for(let i = 2; i <= num; i++)
    {
        result*=i;
    }
    return result;        
};

console.log(factorial(5));