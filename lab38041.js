// Refactoring the code of Alab30831
//OLD CODE
// let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// //Split the CSV string into rows using the \n character as the delimiter
// let rows = csvString.split("\n");
// for (let i = 0; i < rows.length; i++) {
//   let cells = rows[i].split(",");
//   //Log each cell of the row to the console
//   console.log(cells[0], cells[1], cells[2], cells[3]);
// }

//===========================PART ONE============================//
// Refactoring the code of Alab30831

//Creating Objects with CSV file:
let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Split the CSV string into rows using the \n character as the delimiter
let rows = csvString.split("\n");
console.log(rows);
let cells;
// Iterate over each row (except the header)
for (let i = 1; i < rows.length; i++) {
  // Split the row into cells using the , character as the delimiter
  cells = rows[i].split(",");
  console.log(cells);
  
  // Create an object for each person
  let person = {
    ID: cells[0],
    Name: cells[1],
    Occupation: cells[2], 
    Age: cells[3]
  };
  
  // Print all keys for the object person
  console.log(Object.keys(person));
  
  // Print the values for the person
  console.log(Object.values(person));
}
//===========================PART TWO============================//
// Declare a variable to store the number of columns
let numberColumns = rows[0].split(",").length;
console.log(numberColumns);

//Store your results in a two-dimensional array:
let twoDimArr = [];
// Iterate over each row
for (let i = 0; i < rows.length; i++) {
    // Split the row into cells
    let cells = rows[i].split(",");
  
    // Add the row to the csvData array
    twoDimArr.push(cells);
  }
  console.log(twoDimArr);
  //===========================PART THREE============================//
  // Create an array to store the objects
let rowsTobjects = [];

// Iterate over each row
for (let i = 1; i < twoDimArr.length; i++) {
  // Create an object with lowercase keys
  let obj = {};
  for (let j = 0; j < twoDimArr[0].length; j++) {
    obj[twoDimArr[0][j].toLowerCase()] = twoDimArr[i][j];
  }

  // Add the object to the objects array
  rowsTobjects.push(obj);
}
// Print the objects array
console.log(rowsTobjects);
