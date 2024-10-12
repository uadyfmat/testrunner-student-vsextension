const fs = require('fs');
const path = require('path');
const vscode = require('vscode');
const { exec } = require('child_process');

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

function installNodeAndNpm(os) {
    return new Promise((resolve, reject) => {
        if (os === "MacOs") {
            const checkBrew = `brew --version`;
            const installBrew = `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`;
            const installNode = `brew install node`;

            exec(checkBrew, (error) => {
                if (error) {
                    vscode.window.showInformationMessage('Homebrew is not installed. Installing Homebrew...');
                    exec(installBrew, (error) => {
                        if (error) {
                            vscode.window.showErrorMessage('Failed to install Homebrew:', error);
                            reject(error);
                        } else {
                            vscode.window.showInformationMessage('Homebrew installed successfully.');
                            exec(installNode, (error) => {
                                if (error) {
                                    vscode.window.showErrorMessage('Failed to install Node.js and npm:', error);
                                    reject(error);
                                } else {
                                    vscode.window.showInformationMessage('Node.js and npm installed successfully.');
                                    resolve();
                                }
                            });
                        }
                    });
                } else {
                    vscode.window.showInformationMessage('Homebrew is already installed. Installing Node.js and npm...');
                    exec(installNode, (error) => {
                        if (error) {
                            vscode.window.showErrorMessage('Failed to install Node.js and npm:', error);
                            reject(error);
                        } else {
                            vscode.window.showInformationMessage('Node.js and npm installed successfully.');
                            resolve();
                        }
                    });
                }
            });
        }
    });
}

function isHomebrewInstalled() {
    return new Promise((resolve) => {
        const checkBrew = `brew --version`;
        exec(checkBrew, (error) => {
            if (error) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}

module.exports =
{
    findSpecFiles,
    installExtension,
    runTestRunner,
    installNodeAndNpm
};