// 15. Reverse Number

var reverseNumber = function(num){

    let reversed = 0;

    while(num > 0){

        // last digit বের করা
        let digit = num % 10;

        // reverse তৈরি করা
        reversed = reversed * 10 + digit;

        // last digit remove করা
        num = Math.floor(num / 10);
    }

    return reversed;
};

console.log(reverseNumber(123));