// from data.js
var tableData = data;
// creating columns for table
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
        //Object.entries(sightings).forEach(function([key, value]) {

        // Append a cell to the row for each value
        // var cell = row.append("td");
        // cell.text(value);
        columns.forEach(column => row.append("td").text(Sightings[column])
        )
    });
}
// adding data to the table
addData(tableData);

// setting up the filter button for the date and the city
button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = inputSelectDate.property("value").trim();
    // console.log(inputSelectDate)
    // clean up the input to what is needed
       // Filter Data with datetime equal to input value

       var inputCity = inputCity.property("value").toLowerCase().trim();
       // Filter Data with datetime equal to input value
       var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
       var filterCity = tableData.filter(tableData => tableData.city === inputCity);
       var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);
       //var filterData = tableData.filter(sighting => sighting.datetime === inputValue ||
       //                                             sighting.city === inputValue      ||
       //                                             sighting.state === inputValue     ||
       //                                             sighting.country === inputValue   ||
       //                                             sighting.shape === inputValue);
     // Clears the initial build table
    $tbody.html("");
    
    // filter through the data to find the results
    let response = {
        filterDate, filterCity, filterCombinedData
    }
    // add data response if sitghtings are found
    if(response.filterCombinedData.length !== 0) {
      addData(filterCombinedData);
  }
    //console.log(filteredData)
    // add comment if there is no sightings found for the date entered
  else if(response.filterCombinedData.length === 0 && ((response.filteredDate.length !== 0 || response.filterCity.length !== 0))) {
    addData(filterDate) || addData(filterCity);
  }
// add comment if there is no sightings found for the date entered
else {
  $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
}
})
// set up the reset button 
btnReset.on("click", () => {
	document.getElementById("searchDate").value='';
	document.getElementById("searchCity").value='';
	document.getElementById("searchState").value='';
	document.getElementById("searchCountry").value='';
	document.getElementById("searchShape").value='';
	//document.getElementById("reset").onclick = function() {
    //document.getElementById("#input").innerHTML = "";
	// Load your first dataset table
	loadTableRows(tableData);
})
