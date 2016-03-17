var data2 = [4, 8, 15, 16, 23, 42];

var data = [
  {
    'month': 11,
    'year': 2013,
    'date': 30,
    'week': 41,
    'score': 80.20,
    'critical': true
  },
  {
    'month': 10,
    'year': 2014,
    'date': 30,
    'week': 41,
    'score': 60.20,
    'critical': true
  },
  {
    'month': 9,
    'year': 2015,
    'date': 30,
    'week': 41,
    'score': 90.20,
    'critical': true
  }
]


var body = d3.select('body').style('color', 'white').style('background-color', '#000000');
body.append('div').attr('class', 'chart');

var x = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.score; })])
    .range([0, 500]);

var chart = d3.select(".chart");
var bar = chart.selectAll("div")
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");
barEnter.style("width", function(dataItem) { return x(dataItem.score) + "px"; }).style('background-color', '#ff00ff');
barEnter.text(function(dataItem) { return dataItem.year; });

//CHART 2 ------

body.append('div').attr('class', 'chart2');
var x2 = d3.scale.linear()
    .domain([0, d3.max(data2)])
    .range([0, 420]);

console.log(x2(data[0]));

d3.select(".chart2")
  .selectAll("div")
    .data(data2)
  .enter().append("div")
    .style('background-color', '#ff0000')
    .style("width", function(d) { return x2(d) + "px"; })
    .text(function(d) { return d; });



//Because these elements were created with the data join, each bar is already bound to data.

// barEnter.text(function(dataItem) { return dataItem.year; });

/*
D3’s selection operators such as attr, style and property, allow you to specify the value
either as a constant (the same for all selected elements) or a function (computed separately
for each element). If the value of a particular attribute should be based on the element’s
associated data, then use a function to compute it; otherwise, if it’s the same for all elements
,then a string or number suffices.
*/
