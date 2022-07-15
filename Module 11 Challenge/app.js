// Instructions from Module 11.2.4: Storyboarding
// https://courses.bootcampspot.com/courses/1225/pages/11-dot-2-4-storyboarding?module_item_id=498790

// Import the data from data.js and assign it to variable tableData
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

// This 1st function will build a table + pass in "data" as the argument.
function buildTable(data) {
    // In the next line, we'll want to use code to clear existing data.
    // (The entire line—tbody.html("");—tells JavaScript to use an empty string when creating the table; in other words, create a blank canvas. 
    // This is a standard way to clear data.)
    tbody.html("");
    
    // (Now that we have the start of a clean table, let's apply the forEach function.)


    // Module 11.5.2: Add forEach to Your Table (below)
    // https://courses.bootcampspot.com/courses/1225/pages/11-dot-5-2-add-foreach-to-your-table?module_item_id=498852
   
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

// Footnote/tip:--->tbody.html("");
// Q: Why should you clear existing data from the table?
// A: Because we need to clear the data first, otherwise the data users search will already be filtered when they search again.



// So far in the code:
// The code we helped create will add every object in ou data.js file to the table. Bundled into one tidy package, 
// every sighting will be available for Dana (and her readers) to view!

// (There is a lot of information in data.js that needs to be filtered.)---A 2ND FUNCTION IS NEEDED!!!


// This is where -Module 11.5.3: Add Filters- comes in.
// https://courses.bootcampspot.com/courses/1225/pages/11-dot-5-3-add-filters?module_item_id=498859


    // This module introduces We'll be using D3.js:
    // Data-Driven Documents (D3 for short) is a JavaScript library that adds interactive functionality, 
    // such as when users click a button to filter a table. It works by "listening" for events, 
    // such as a button click, then reacts according to the code we've created.

// (In this case, we will filter the data by date.)
// (Since we're adding a date function, we need to create a couple of variables to hold our date data, 
// both filtered and unfiltered: date and filteredData).

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");

    // Set a default filter and save it to a new variable
    // (Our default filter will actually be the original table data (tableData from Module 11.2.4 above) 
    // because we want users to refine their search on their own terms.)
    let filteredData = tableData;

    // Module 11.5.4 = The next step is to check for a date filter using an if statement.
    // 11.5.4: Use the “If” Statement
    // https://courses.bootcampspot.com/courses/1225/pages/11-dot-5-4-use-the-if-statement?module_item_id=498864

    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);

}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
 


// Self-note/tip:--->let date = d3.select("#datetime").property("value");
// .select() function is common function used in D3.
    // It will select the very first element that matches our selector string: "#datetime". 
    // (The selector string is the item we're telling D3.js to look for.)

// Self-note/tip:--->d3.select("#datetime")
    // tells D3 to look for the #datetime id in the HTML tags.
    // As far as Module 11.5.3: (We haven't created our HTML yet, but we know that the date value will be nested within tags that have an id of "datetime.")

// Self-note/tip:--->.property("value");
    // By chaining .property("value"); to the d3.select function, 
    // we're telling D3 not only to look for where our date values are stored on the webpage, 
    // but to actually grab that information and hold it in the "date" variable.

// Self-note/tip:--->let filteredData = tableData;
    // tableData = the original data as imported from our data.js file (from Module 11.2.4 above).
    // This is the original data as imported from our data.js file.
    // By setting the filteredData variable to our raw data, we're basically using it as a blank slate. 
    // The function we're working on right now will be run each time the filter button is clicked on the website. 
    // If no date has been entered as a filter, then all of the data will be returned instead.



// Summary of functions within code:
// (1) funtion buildTable()
// (2) function handleClick() 