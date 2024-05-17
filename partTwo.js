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

    let arrOfObj = convertData(string)


//Sort the array by age.
    let newArrSorted = arrOfObj.sort((x,y)=> x.age - y.age);


//Filter the array to remove entries with an age greater than 50.
    let lessThan50 = arrOfObj.filter(item => parseInt(item.Age) < 50);
    

//Map the array to change the “occupation” key to “job” and increment every age by 1.
function updateArray(lessThan50Than50){    
    
    let updArray = lessThan50.map(item =>  parseInt(item.Age) + 1
        // change the “occupation” key to “job”

        // let updateKey = item.occupation
        
        // // Return an object with both updated properties
        // return { ...item, age: updatedAge, occupation: updatedkey };
    );

    return updArray;
}

let updatedArr = updateArray(lessThan50);


//Use the reduce method to calculate the sum of the ages. Then use the result to calculate the average age.
function sumAndAvg(arrAge){
    
    let sum = arrAge.reduce((accum, elem)=> accum + elem, 0);
    let average = sum/arrAge.length;
    
    return `The sum  of the ages is ${sum} and the average is ${average.toFixed(2)}`
}


console.log("*----------ARRAY SORTED BY AGE-------------*")
console.log(newArrSorted)
console.log("\n*-----ARRAY WITH AGES LESS THAN 50---------*")
console.log(lessThan50)
console.log("\n*-----SUM AND AVERAGE OF AGES---------*")
console.log(sumAndAvg(updatedArr))

