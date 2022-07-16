// This file (ufo_starterCode.js) downloaded per Deliverable 1 instructions in Module 11 Challenge.
// https://courses.bootcampspot.com/courses/1225/assignments/24803?module_item_id=498895

// Self-note: this file will be re-named app.js for the Module 11 Challenge
// (The original app.js created + modified throughout Module 11 will be renamed app_1.js-->also uploaded in repository for future reference.)



// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object. (Store the variables and ids.)
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    // (Create a variable that will select all of the elements that change;
    // this will initialize an array for the value and the id.)
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    // (Create a variable that will hold the value of the property that has changed.)
    let elementValue = changedElement.property("value");
    console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable.
    // (Create a variable that will hold the id of the id attribute that has changed.)
    let filterId = changedElement.attr("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filter id and value to the filters list. 
    // (Check if a value is entered and stored in the elementValue variable.)
    if (elementValue) {  // (1) If a value was entered, add it and the filter id to the filters object...
      filters[filterId] = elementValue;
    }
    else {  // (2) Otherwise, [if value not entered] clear the filter id from the filters object.
      delete filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    // (This function will loop through the filters object--and for each key and value that is stored--the function
    // will filter the movie table as indicated by the search parameters.)
    filterTable();
  
  }

        //-------------------------------------------------------------------------------------|
        //  Self-note: updateFilters() in this file works in conjuction to the index.html file |
        //  index.html viewed on browser:                                                      |
        //  Allows to filter the table based on any/or all of criteria                         |
        //    (1) When a user enters search criteria, the JavaScript code (this file app.js)   |
        //        will store values in the text box and  ID's associated with the text box     |
        //        in a JavaScript Object when typing into the criteria field                   |
        //        (under Filter Search)                                                        |
        //    (2) When typing into the search criteria field, the code (app.js)                |
        //        shows the [value entered] and the ID for that [value]                        |
        //        in the DevTools console. (Same if multiple search criteria are entered.)     |
        //                                                                                     |
        //    (Search parameters are organized in the index.html file as list elements.)       |      
        //        For each element, there is                                                   |
        //        (1) a label for that element that contains                                   |
        //        the label for each search parameter                                          |
        //        (2) an input element that provides the input box                             |
        //              Each input element has                                                 |
        //                (a) and id (i.e., the property of each element in the data set--     |
        //                     datetime, city, etc.)                                           |
        //                (b) a placeholder                                                    |
        //                                                                                     |
        //    2 examples from the index.html file:                                             |
        //                                                                                     |
        //    <ul class="list-group bg-dark">                                                  |
        //      <li class="list-group-item bg-dark">                                           |
        //        <label for="date">Enter Date</label>                                         |
        //        <input type="text" placeholder="1/10/2010" id="datetime" />                  |
        //      </li>|                                                                         |
        //      <li class="list-group-item bg-dark">                                           |
        //        <label for="city">Enter a City</label>                                       |
        //        <input type="text" id="city" class="form-control" placeholder="roswell" />   |
        //      </li>                                                                          |
        //    </ul>                                                                            |
        //                                                                                     |
        //-------------------------------------------------------------------------------------|
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    // (The default filter will actually be the original table data.)
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });

    // 10. Finally, rebuild the table using the filtered data [passing the variable created in Step 8].
    buildTable(filteredData);

  }
  
  // 2. Attach an event to listen for changes to each filter 
  // (Below, an "event listener" to catch all seach parameters that change on user input.)
  d3.selectAll("input").on("change", updateFilters);
  // (Detects which input elements have changed on the html page, and when they change-->call the function updateFilters.)
  
  // Build the table when the page loads
  buildTable(tableData);



  



  
// Module 11 Deliverable 1 Instructions:

// Follow the instructions below and the numbered comments in the starter code to complete Deliverable 1.

// [x] 1. Download the ufo_starterCode.js, rename it app.js, and place it in the js folder of your UFOs GitHub repository. 
//          The starter code includes the code used to populate the table from this module.
// [x] 2. In the index.html file, remove the list (<li></li>) element that creates the button.
// [x] 3. Create four more list elements: city, state, country, and shape. 
//          These will be similar to the "Enter Date" list element. 
//          Each element should have the same "id" as the object properties in the data.js file.
// [x] 4. In Step 1 of the app.js file, create an empty filters variable 
//          to keep track of all the elements that change when a search is entered. 
//          This variable will be used in Step 5 to store the property “id” and the value that was entered from user input.
//
//          var filters = {};
//
// [x] 5. Next, you will need to write code for two functions whose names we’ve 
//          provided in the starter code, updateFilters() and filterTable().
//
//          The updateFilters() function will replace your handleClick() function and update the filters variable you created in Step 1.
//          The filterTable() function will filter the table data by the value that is entered for the "id" that has changed.
//
// [x] 6. For Step 2, located before the buildTable(tableData) function at the end of the starter code, 
//          modify the event listener from this module so that it detects 
//          a "change" on each input element and calls the updateFilters() function.
//
//          d3.selectAll("input").on("change", updateFilters);
//
// [x] 7. In Step 3, we’ve provided the function, updateFilters(). 
//          Inside this function, you’ll write code in Steps 4-5 to update the filters based on user input.
//     
// [x] 8. In Step 4a, create a variable that saves the element that was changed using d3.select(this).
//                 
// [x] 9. In Step 4b, create a variable that saves the value of the changed element’s property.
//      
// [x] 10. In Step 4c, create a variable that saves the attribute of the changed element’s id.
//
// [x] 11. In Step 5, write an if-else statement that checks if a value was changed by the user 
//          (variable from Step 4b). If a value was changed, add the element’s id (variable from Step 4c) 
//          as the property and the value that was changed to the filters variable you created in Step 1.
//          If a value was not entered, then clear the element id from the filters variable.
//
// [x] 12. In Step 6, inside the updateFilters() function, 
//           call the filterTable() function that will be used in Step 7.
//
// [x] 13. In the filterTable() function in Step 7, 
//          write code to filter the table based on the user input that is stored in the filters variable.
//
// [x] 14. In Step 8, create a variable for the filtered data that is equal to the data that builds the table. 
//          This variable will hold the updated table data based on the user input.
//
// [x] 15. In Step 9, loop through the filters object and store the data that matches the filter values in the variable created in Step 8.
//
// [x] 16. In Step 10, rebuild the table with the filtered data by passing the variable created in Step 8.
//
// [x] 17. Deploy the web app on your GitHub pages.