const string= "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

function convertData(str){

    let arr = [];

    //Getting the rows using the split() metod
    let row = str.split("\n");

    let columnNum = row[0].split(",").length;

    let headers = row[0].split(",");

    //For loop to loop through each row
        for(let i=1; i<row.length; i++){
            let cells = row[i].split(",");

        //Create an object for this row
            let obj ={};

                //For loop to loop through each cell and add it to the object
                for(let j=0; j< columnNum; j++){
                    obj[headers[j]] = cells[j];
                }
        
            arr.push(obj)
        }

        return arr;
}



//PART TWO: Thinking Methodically

// let arrOfObj = convertData(string)
let arrOfObj = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]

//Sort the array by age.
// let newArrSorted = arrOfObj.sort((a,b)=> a.age - b.age);
// console.log(newArrSorted)

//Filter the array to remove entries with an age greater than 50.
// let greaterThan50 = arrOfObj.filter(item=> item.age < 50 );
// console.log(greaterThan50)

//Map the array to change the “occupation” key to “job” and increment every age by 1.
// let incremeentAge = greaterThan50.map(item => parseInt(item.age)+1);
// console.log(incremeentAge)//At the moment, it only returns an array with the age increased by 1. Still working on it

/*Use the reduce method to calculate the sum of the ages.
Then use the result to calculate the average age.
*/
// let value = 0;
// let sumOfAges = incremeentAge.reduce((accum, elem)=> accum + elem, value);
// console.log(sumOfAges)
// let average = sumOfAges/incremeentAge.length;
// console.log(average.toFixed(2))


//THINKING CRITICALLY
function incrementAge(arr){
        arr.forEach(element => {
           element.age = (+`${element.age}`)+1
        });
        return arr;
}

console.log(incrementAge(arrOfObj))

