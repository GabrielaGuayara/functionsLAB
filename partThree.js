import {str , convertData}  from "./partTwo.js";


// const string= "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// function convertData(str){

//     let arr = [];

//     //Getting the rows using the split() metod
//     let row = str.split("\n");

//     let columnNum = row[0].split(",").length;

//     let headers = row[0].split(",");

//     //For loop to loop through each row
//         for(let i=1; i<row.length; i++){

//             let cells = row[i].split(",");

//         //Create an object for this row
//             let obj ={};

//                 //For loop to loop through each cell and add it to the object
//                 for(let j=0; j< columnNum; j++){

//                     obj[headers[j]] = cells[j];
                
//                 }
        
//             arr.push(obj)
//         }

//         return arr;
// }

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

