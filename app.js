//PART ONE: THINKING FUNCTIONALLY

//Function that takes an array of numbers and return the sum
let arr = [1,2,3,4];

function sumOfNumbers(arr){
    let sum = 0;
    for(let i=0; i< arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(sumOfNumbers(arr))

//Function that takes an array of numbers and return the averge.
function getAverage(arr){
    let sum = 0;
    let len = arr.length
    for(let i=0; i< len; i++){
        sum+=arr[i];
    }
    let avg = sum/len;
    console.log(sum, len)
    return avg;
}
console.log(getAverage(arr))

//Function that takes an array of string and return the longest string
let str1 = "hello"
let str2 = "helloWorld"
function getTheLongest(str1, str2){
    if(str1.length>str2.length){
        return "Str1 is the longest"
    }else{
        return "Str2 is the longest"
    }
}

console.log(getTheLongest(str1, str2))
