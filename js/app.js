// from data.js
var tableData = data;

// creating references to the table body
var tbody = d3.select("tbody");

// listen events and alter table based on event
// select button elements html
var button = d3.select("#filter-btn");
var form = d3.select("form");


// build table and loads all sightings into it for each column
tableData.forEach(sighting => {
    // append one table row"tr" for each element
    //tabeldata.forEach(functions(ufoSighting) {})
    //console.log(ufosighting);
    var row = tbody.append("tr");
    // add td elements entries with the values from tableData
    Object.entries(sighting).forEach(function ([key, value]) {
        //append a cell to the row for each value
        var cell = row.append("td")
        cell.text(value)
    });
});


// Select the button
button.on("click", handleClick);
form.on("submit", handleClick);

// function triggerd by event
function handleClick() {
    // stop auto refresh from happening
    d3.event.preventDefault();
    // Select the input date get the raw HTML nodes
    var inputDate = d3.select("#datetime");
    // Get the value property of the input date, state, shape
    var inputValue = inputDate.property("value");
    // filter based on the user inputs
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    // console.log input value
    console.log(filteredData)
    // select table element
    var tbody = d3.select("tbody");
    // start with clean table
    tbody.html("")
    // reuse inital set up to be filtered and change the var to the filtered data
    filteredData.forEach(sighting => {
        //console.log(sighting);
        // Append one table row `tr` for each UFO Sighting object
        var row = tbody.append("tr");
        // add td elements and fill with the values from tableData
        Object.entries(sighting).forEach(function ([key, value]) {
            // Append a cell to the row for each value
            var cell = row.append("td")
            cell.text(value)
        });
    });

}

