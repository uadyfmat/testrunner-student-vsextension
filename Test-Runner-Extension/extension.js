// The module 'vscode' contains the VS Code extensibility API

// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');



function activate(context) {
    // Función para instalar Test-Runner
    let installTestRunner = vscode.commands.registerCommand('test-runner-extension-0.installTestRunner', () => {
        const terminal = vscode.window.createTerminal({
            name: "Terminal de Instalación",
            shellPath: "C:\\Program Files\\Git\\bin\\bash.exe"
        });
        terminal.sendText("npm i -g uadyfmat/test-runner");
        terminal.show();
    });

    // Función para ejecutar Test-Runner con entrada del usuario
    let runTest = vscode.commands.registerCommand('test-runner-extension-0.runTest', async () => {
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
    });

    /* let installNode = vscode.commands.registerCommand('test-runner-extension-0.installNode', function () {
        vscode.env.openExternal(vscode.Uri.parse('https://nodejs.org/'));
    }); */

   // Función para instalar Node.js usando Chocolatey

    let installNode = vscode.commands.registerCommand('test-runner-extension-0.installNode', function () {
        const terminal = vscode.window.createTerminal({
            name: "Terminal de Instalación",
            shellPath: "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"
        });
        terminal.sendText("choco install nodejs -y");
        terminal.show();
    });


    // Función para instalar Git Bash usando Chocolatey
    /* let installGitBash = vscode.commands.registerCommand('test-runner-extension-0.installGitBash', function () {
        const terminal = vscode.window.createTerminal({
            name: "Terminal de Instalación",
            shellPath: "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"
        });
        terminal.sendText("choco install git -y");
        terminal.show();
    }); */


    let installGitBash = vscode.commands.registerCommand('test-runner-extension-0.installGitBash', function () {
    vscode.env.openExternal(vscode.Uri.parse('https://gitforwindows.org/'));
    });

    // Función para instalar Chocolatey
    let installChocolatey = vscode.commands.registerCommand('test-runner-extension-0.installChocolatey', function () {
        vscode.window.showInformationMessage("Para instalar Chocolatey, abre una terminal de PowerShell como administrador y ejecuta el siguiente comando:\n\nSet-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))");
    });

    // Agrega ambas funciones a las suscripciones del contexto
    context.subscriptions.push(installTestRunner);
    context.subscriptions.push(runTest);
    context.subscriptions.push(installNode);
    context.subscriptions.push(installGitBash);
    context.subscriptions.push(installChocolatey);
}


function deactivate() {}

module.exports = {
    activate,
    deactivate
};