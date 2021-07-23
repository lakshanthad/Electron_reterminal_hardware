// Load the required modules
const { app, BrowserWindow, ipcMain } = require('electron');

// Use ipcMain module to receive the messages from the ipcRenderer module and close the app
ipcMain.on("close-app", (event, arg) => {
    app.quit()
})

// Create application window
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        // Make the app fullscreen
        "fullscreen": true,
        webPreferences: {
            // enable the communication between the main and rendered process
            nodeIntegration: true,
            contextIsolation: false
          }
    });
    // Load the HTML page with CSS styling
    mainWindow.loadFile('index.html');

    // mainWindow.webContents.openDevTools();
});