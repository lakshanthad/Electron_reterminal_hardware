// load the required modules
const InputEvent = require('npm-reterminal');
const dev = require('npm-reterminal/lib/deviceid');

// load the required input event
const button = new InputEvent.Button(dev.buttonsPath());

// Change button color on button press
button.on('F1ON' , function(){
    document.getElementById("F1Btn").style.background = '#484848';
});
button.on('F1OFF' , function(){
    document.getElementById("F1Btn").style.background = '#dbd8d8';
});

button.on('F2ON' , function(){
    document.getElementById("F2Btn").style.background = '#484848';
});
button.on('F2OFF' , function(){
    document.getElementById("F2Btn").style.background = '#dbd8d8';
});

button.on('F3ON' , function(){
    document.getElementById("F3Btn").style.background = '#484848';
});
button.on('F3OFF' , function(){
    document.getElementById("F3Btn").style.background = '#dbd8d8';
});

button.on('OON' , function(){
    document.getElementById("OBtn").style.background = '#006400';
});
button.on('OOFF' , function(){
    document.getElementById("OBtn").style.background = '#5fc779';
});