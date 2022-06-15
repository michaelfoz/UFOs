// Instructions from Module 11.2.4: Storyboarding
// https://courses.bootcampspot.com/courses/1225/pages/11-dot-2-4-storyboarding?module_item_id=498790

// Import the data from data.js
// (const is used because we don't want the variable to be reassigned/reused at all in our program.)
const tableData = data;



// Reference the HTML table using d3 (i.e., point our data to HTML page
// by telling JavaScript what type of element the data will be displayed in).
// D3 is a JavaScript library that produces sophisticated/dynamic graphics to HTML webpage.

var tbody = d3.select("tbody");
// variable tbody is declared; d3.select used to tell JavaScript to look for <tbody>
// tags in the HTML 



// Instructions to return to this file (app.js in Module 11.5.1: Intro to Dynamic Tables)
// https://courses.bootcampspot.com/courses/1225/pages/11-dot-5-1-introduction-to-dynamic-tables?module_item_id=498848
// Goal: build a table to display all of the UFO sightings
// How? Need to create a function that will:
// (1) iterate through the array of objects in data.js file
// (2) append objects to a table row


// Name the function based on its task + pass in "data" as the arugment:

// Pass in "data" as the argument. 
// (Note: Remember that we used the variable "data" 
// earlier to import our array of UFO sightings? 
// This is the first step in actually working with the data.)

// This function will build a table + pass in "data" as the argument.
function buildTable(data) {
    // In the next line, we'll want to use code to clear existing data.
    // (The entire line—tbody.html("");—tells JavaScript to use an empty string when creating the table; in other words, create a blank canvas. 
    // This is a standard way to clear data.)
    tbody.html("");
    
    // (Now that we have the start of a clean table, let's apply the forEach function.)

    // Loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
}