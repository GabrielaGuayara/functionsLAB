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

