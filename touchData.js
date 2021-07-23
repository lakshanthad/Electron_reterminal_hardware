// load the required input event
const touch = new InputEvent.Touch(dev.tpPath());

// Send x-axis coordinate
touch.on('x-axis', function(buffer1){
    document.getElementById('circle').style.left = buffer1 + 'px';
});

// Send y-axis coordinate
touch.on('y-axis', function(buffer2){
    document.getElementById('circle').style.top = buffer2 + 'px';
});