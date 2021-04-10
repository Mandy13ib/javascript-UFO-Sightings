// from data.js
var tableData = data;
// creating columns
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// creating references for the body of the table
var $tbody = d3.select("tbody");
// creating buttom
var button = d3.select("#filter-btn");
// creating input
var inputSelectDate = d3.select("#datetime");
var inputCity = d3.select("#city");

// inputing the data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(Sightings => {
        //console.log(Sightings);
        //add tr elements
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(Sightings[column])
        )
    });
}
// adding data to the table
addData(tableData);
// creating the event for the button
// setting up the filter button for the date and the city
button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = inputSelectDate.property("value").trim();
    // console.log(inputSelectDate)
    // clean up the input to what is needed
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    // Clears the initial build table
    $tbody.html("");
    // filter through the data to find the results
    let response = {
        filterDate
    }
    //console.log(filteredData)
    // add data response if sitghtings are found
    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }
    // add comment if there is no sightings found for the date entered
        else {
            $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})