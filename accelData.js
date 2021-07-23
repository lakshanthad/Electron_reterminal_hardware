// load the required input event
const accel = new InputEvent.Accel(dev.accelPath());

// Decalre variables to store x, y, z-axis accelerations
var accelx;
var accely;
var accelz;

// Send x-axis acceleration
accel.on('A1', function(buffer1){
    accelx = buffer1;
});

// Send y-axis acceleration
accel.on('A2', function(buffer2){
    accely = buffer2;
});

// Send z-axis acceleration
accel.on('A3', function(buffer3){
    accelz = buffer3;
});

// Adding acceleration data
var x = new TimeSeries();
var y = new TimeSeries();
var z = new TimeSeries();
              
// Adding acceleration data points every 500ms
setInterval(function() {
  x.append(Date.now(), accelx);
  y.append(Date.now(), accely);
  z.append(Date.now(), accelz);
}, 500);
            
// Creating and styling the chart
var chart = new SmoothieChart({millisPerPixel:13,grid:{fillStyle:'#ffffff'},labels:{fillStyle:'#000000'},timestampFormatter:SmoothieChart.timeFormatter});
chart.addTimeSeries(x, {lineWidth:2,strokeStyle:'#001eff'});
chart.addTimeSeries(y, {lineWidth:2,strokeStyle:'#D53715'});
chart.addTimeSeries(z, {lineWidth:2,strokeStyle:'#800080'});
// Stream a SmoothieChart to the canvas
chart.streamTo(document.getElementById("accelChart"), 500);

