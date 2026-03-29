const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('overlay', {
    close: () => ipcRenderer.send('close-app'),
    minimize: () => ipcRenderer.send('minimize-app'),
    onClickThroughChanged: (callback) => ipcRenderer.on('click-through-changed', (_, value) => callback(value))
});
