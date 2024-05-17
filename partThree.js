import {str , convertData}  from "./partTwo.js";

let arr = convertData(str)


//PART THREE: THINKING CRITICALLY
function incrementAge(arr){
    arr.forEach(element => {
       element.Age = (+`${element.Age}`)+1
    });
    return arr;
}



//Take an object, make a copy, and increment the age field of the copy. Return the copy.
let copyArray = incrementAge(arr);


//Take an object and increment its age field.
function copyAndIncrementAge(acopyArr) {
    arr.forEach(element => {
        element.Age = (+`${element.Age}`)+10;
     });
     return arr;
 }

 console.log(incrementAge(arr))
 console.log(copyAndIncrementAge(copyArray))

