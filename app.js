//PART ONE: THINKING FUNCTIONALLY

//Function that takes an array of numbers and return the sum
let arr = [1,2,3,4];
let sum = 0;
function sumOfNumbers(arr){
for(let i=0; i< arr.length; i++){
    sum+=arr[i];
}
return sum;
}

console.log(sumOfNumbers(arr))