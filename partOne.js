//PART ONE: THINKING FUNCTIONALLY

let arr = [ 1, 2, 3, 4];

//Function that takes an array of numbers and return the sum
function sumOfNumbers(arr){
    
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        
        sum += arr[i];
    }

    return sum;
}


//Function that takes an array of numbers and return the averge.
function getAverage(arr){
    
    let sum = 0;

        for(let i = 0; i < arr.length; i++){
            
            sum += arr[i];

        }

    // console.log(sum, len)
    return sum/arr.length;
}


//Function that takes an array of string and return the longest string
let str1 = "hello"

let str2 = "helloWorld"

function getTheLongest(str1, str2){
    
    if (str1.length > str2.length){

        return `Str1: "${str1}"`
    
    } else{
        
        return `Str2: "${str2}"`
    
    }
}



/*
Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
 */

function stringsLongerThan(str1, n){

    let arr = [];

    let len = str1.length;

    for(let i = 0; i < n+1; i++){

        if(len > n){

            arr.push(str1[i])
        }

    }

    return arr;
}

//take a number, n, and print every number between 1 and n without using loops. Use recursion.

function recursiveFunction (n){

    if(n<0)
        return;
    else{
        console.log(n)
        return recursiveFunction(n-1);
    }
}

console.log(recursiveFunction(10))


console.log(`The sum of the array of numbes is ${sumOfNumbers(arr)}`)
console.log(`The average the array of number is ${getAverage(arr).toFixed(2)}`)
console.log(`The longest array is ${getTheLongest(str1, str2)}`)
console.log(stringsLongerThan(str1, 3));