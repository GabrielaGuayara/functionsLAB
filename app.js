// //PART ONE: THINKING FUNCTIONALLY

// //Function that takes an array of numbers and return the sum
// let arr = [1,2,3,4];

// function sumOfNumbers(arr){
//     let sum = 0;
//     for(let i=0; i< arr.length; i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// console.log(sumOfNumbers(arr))

// //Function that takes an array of numbers and return the averge.
// function getAverage(arr){
//     let sum = 0;
//     let len = arr.length
//     for(let i=0; i< len; i++){
//         sum+=arr[i];
//     }
//     let avg = sum/len;
//     console.log(sum, len)
//     return avg;
// }
// console.log(getAverage(arr))

// //Function that takes an array of string and return the longest string
// let str1 = "hello"
// let str2 = "helloWorld"
// function getTheLongest(str1, str2){
//     if(str1.length>str2.length){
//         return "Str1 is the longest"
//     }else{
//         return "Str2 is the longest"
//     }
// }

// console.log(getTheLongest(str1, str2))


//Take an array of strings, and a number and return an array of the strings that are longer that the given number
// let stringLongerThan =(['say', 'hello', 'in', 'the', 'morning'],3)


//Function that takes a number and print every number between 1 and n without using loops.


//PART TWO: Thinking Methodically
/*
 */

let arrOfObj = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
    ]

//Sort the array by age.
let newArrSorted = arrOfObj.sort((a,b)=> a.age - b.age);
// console.log(newArrSorted)

//Filter the array to remove entries with an age greater than 50.
let greaterThan50 = arrOfObj.filter(item=> item.age < 50 );
// console.log(greaterThan50)

//Map the array to change the “occupation” key to “job” and increment every age by 1.
let incremeentAge = greaterThan50.map(item => parseInt(item.age)+1);
console.log(incremeentAge)//At the moment, it only returns an array with the age increased by 1. Still working on it

/*Use the reduce method to calculate the sum of the ages.
Then use the result to calculate the average age.
*/
let value = 0;
let sumOfAges = incremeentAge.reduce((accum, elem)=> accum + elem, value);
console.log(sumOfAges)
let average = sumOfAges/incremeentAge.length;
console.log(average.toFixed(2))