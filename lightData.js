// load the required input event
const light = require('npm-reterminal/lib/light');

// Obtain light intensity data
function senseLight() {
  while (true) {
    return light.lightSense()
  }
}

// Adding light intensity data
var lightInt = new TimeSeries();

// Adding light intensity data points every 500ms
setInterval(function() {
  lightInt.append(Date.now(), senseLight());
}, 500);

// Creating and styling the chart
var chart1 = new SmoothieChart({millisPerPixel:13,grid:{fillStyle:'#ffffff'},labels:{fillStyle:'#000000'},timestampFormatter:SmoothieChart.timeFormatter});
chart1.addTimeSeries(lightInt, {lineWidth:2,strokeStyle:'#001eff'});
// Stream a SmoothieChart to the canvas
chart1.streamTo(document.getElementById("lightChart"), 500);




