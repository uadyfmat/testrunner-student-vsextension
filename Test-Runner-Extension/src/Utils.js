const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

function findSpecFiles(directory) {
    let specFiles = [];
    const normalizedDirectory = path.normalize(directory);

    function exploreDirectory(currentPath) {
        const files = fs.readdirSync(currentPath, { withFileTypes: true });

        for (const file of files) {
            const fullPath = path.join(currentPath, file.name);
            if (file.isDirectory()) {
                exploreDirectory(fullPath);
            } else if (file.name === 'spec.inout') {
                specFiles.push({
                    name: file.name,
                    path: fullPath
                });
            }
        }
    }

    exploreDirectory(normalizedDirectory);
    return specFiles;
}

const installExtension = () => {
    const terminal = vscode.window.createTerminal({
        name: "Terminal de Instalación",
        shellPath: "C:\\Program Files\\Git\\bin\\bash.exe"
    });
    terminal.sendText("npm i -g uadyfmat/test-runner");
    terminal.show();
}

const runTestRunner = async () => {
    // Solicita al usuario que introduzca el código del lenguaje
    const languageCode = await vscode.window.showInputBox({
        prompt: "Introduce el código del lenguaje para test-runner",
        placeHolder: "Código del lenguaje (ej. c, cpp, java, py)"
    });

    // Solicita al usuario que introduzca el nombre de la carpeta
    const folderName = await vscode.window.showInputBox({
        prompt: "Introduce el nombre de la carpeta para test-runner",
        placeHolder: "Nombre de la carpeta"
    });

    if (languageCode && folderName) {
        // Crea una terminal y ejecuta el comando con las variables
        const terminal = vscode.window.createTerminal({
            name: "Terminal de Instalación",
            shellPath: "C:\\Program Files\\Git\\bin\\bash.exe"
        });
        terminal.sendText(`test-runner --language ${languageCode} ${folderName}`);
        terminal.show();
    } else {
        vscode.window.showErrorMessage("Se necesitan el código del lenguaje y el nombre de la carpeta para ejecutar test-runner.");
    }
}

module.exports = 
{
    findSpecFiles,
    installExtension,
    runTestRunner
};