
const {app, BrowserWindow} = require('electron')

const { createMainWindow } = require("./src/javascripts/mainwindow");

let win;
const startTimestamp = new Date();

function setActivity() {
  client.updatePresence({
    details: "Playing Chess",
    startTimestamp,
    largeImageKey: 'work_large'
});
}

app.whenReady().then(() => {
  createMainWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
