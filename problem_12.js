//12. Prime check

var primeCheck = function(num){
    for(let i = 2; i*i <= num; i++)
    {
        if(num % i == 0) return false;
    }
    return true;        
};

console.log(primeCheck(7));
console.log(primeCheck(4));