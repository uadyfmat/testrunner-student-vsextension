const fs = require('fs');
const path = require('path');
const vscode = require('vscode');
const { exec, execFile } = require('child_process');
const os = require('os');


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
                const parentFolderName = path.basename(currentPath);
                specFiles.push({
                    name: parentFolderName,
                    path: currentPath
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

// Función para verificar si Node.js y npm están instalados
function checkNodeInstalled() {
    exec('node -v', (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage('Node.js no está instalado o no está en el PATH.');
            return false;
        } else {
            vscode.window.showInformationMessage(`Node.js está instalado. Versión: ${stdout}`);
            return true
        }
    });
}

function checkNPMIstalled(){
    exec('npm -v', (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage('npm no está instalado o no está en el PATH.');
            return false
        } else {
            vscode.window.showInformationMessage(`npm está instalado. Versión: ${stdout}`);
            return true
        }
    });
}

// Función para verificar si Git Bash está instalado
function checkGitBashInstalled() {
    if (os.platform() === 'win32') {
        // Comprobamos si Git Bash está instalado en Windows buscando bash.exe
        const gitBashPath = 'C:\\Program Files\\Git\\git-bash.exe';
        // Verificamos si git-bash.exe existe
        execFile(gitBashPath, ['--version'], (error, stdout, stderr) => {
            if (error) {
                //Puede que si este instalado pero no esta en el path por lo que el true esta hasta que se verifica el git, no el git bash
                vscode.window.showErrorMessage('Git Bash no está instalado o no está en el PATH.');
            } else {
                vscode.window.showInformationMessage(`Git Bash está instalado: ${stdout}`);
            }
        });
    }
    // Para otros sistemas operativos, verificar solo si Git está instalado
    exec('git --version', (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage('Git no está instalado o no está en el PATH.');
            return false
        } else {
            vscode.window.showInformationMessage(`Git está instalado. Versión: ${stdout}`);
            return true
        }
    });
}


module.exports = 
{
    findSpecFiles,
    installExtension,
    runTestRunner,
    checkNodeInstalled,
    checkNPMIstalled,
    checkGitBashInstalled
};