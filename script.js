import electron from 'electron';

let mainWindow = electron.remote.BrowserWindow.getFocusedWindow()

let minimizar = document.getElementById('minimizar')
let maximizar = document.getElementById('maximizar')
let fechar = document.getElementById('fechar')

minimizar.addEventListener('click', (e) => {
    e.preventDefault();
    mainWindow.minimize();
})

maximizar.addEventListener('click', (e) => {
    e.preventDefault();
    if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
    } else {
        mainWindow.maximize();
    }
})

fechar.addEventListener('click', (e) => {
    e.preventDefault();
    mainWindow.close();
})


let cursos = document.querySelectorAll('#cursos a');
const { BrowserWindow } = electron.remote;

cursos.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let secondWindow = new BrowserWindow({ width: 800, height: false })
        secondWindow.setMenu(null);
        secondWindow.loadURL(e.target.getAttribute('href'));
    })
})
