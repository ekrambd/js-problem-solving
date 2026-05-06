//34. Capitalize string

var capitalString = function(str){
    str = str.trim();
    let arr = str.split(/\s+/);
    let result = [];

    for(let i = 0; i < arr.length; i++)
    {
        let capitalize = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        result.push(capitalize);
    }
    
    return result.join(" ");
};

console.log(capitalString("i love programming")); 
console.log(capitalString(" i   love   bd ")); 