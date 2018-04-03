const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

app.on('ready', () => {
    let mainWindow = new BrowserWindow({ width: 800, height: false, frame: false })
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.on('close', () => app.quit());
});
