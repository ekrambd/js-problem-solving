//2. Check palindrome

var checkPalindrome = function(str){
    let left = 0;
    let right = str.length - 1;
    for(let i = 0; i < str.length; i++)
    {
        if(str[left] != str[right]) return false;
        left++;
        right--;
        
    }
    return true;     
};

console.log(checkPalindrome("madam"));