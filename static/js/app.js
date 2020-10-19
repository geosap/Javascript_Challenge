// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var button = d3.select('button');
var input = d3.select('input');

// ========================APP=RUN=========================

showData(data);
button.on('click',handleClick);

// ========================FUNCTION=DEFINITION============

function showData(data) {
    tbody.html('');

    data.forEach(obj => {
        var row = tbody.append('tr');

        Object.values(obj).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        })
    });
};

function handleClick() {
    d3.event.preventDefault();

    var date = input.property('value');

    if (date) {
        tableData = tableData.filter(obj => obj.datetime == date);
        console.log(tableData);
    };

    showData(tableData);
}