const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path');

let win;
let clickThrough = false;

function createWindow() {
    win = new BrowserWindow({
        width: 420,
        height: 700,
        x: 20,
        y: 60,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        skipTaskbar: false,
        resizable: true,
        hasShadow: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    win.loadFile('overlay.html');
    win.setAlwaysOnTop(true, 'screen-saver');

    // Ctrl+Shift+O — Toggle overlay visibility
    globalShortcut.register('Ctrl+Shift+O', () => {
        if (win.isVisible()) {
            win.hide();
        } else {
            win.show();
        }
    });

    // Ctrl+Shift+P — Toggle click-through mode
    globalShortcut.register('Ctrl+Shift+P', () => {
        clickThrough = !clickThrough;
        win.setIgnoreMouseEvents(clickThrough, { forward: true });
        win.webContents.send('click-through-changed', clickThrough);
    });

    ipcMain.on('close-app', () => {
        app.quit();
    });

    ipcMain.on('minimize-app', () => {
        win.hide();
    });
}

app.whenReady().then(createWindow);

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
    app.quit();
});
