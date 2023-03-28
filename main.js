// 使用 CommonJS 导入两个 Electron 模块
// app - 控制应用的事件生命周期
// BrowserWindow - 负责创建和管理应用的窗口
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow(
        {
            width: 800,
            height: 600,
        }
    )

    win.loadFile('index.html')
}


app.whenReady().then(() => {
    createWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
})

console.log("hello electron");