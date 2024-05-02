// The module 'vscode' contains the VS Code extensibility API

const { exec } = require('child_process');

// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');



function activate(context) {
   // Registra el comando para instalar Test-Runner
   let disposable = vscode.commands.registerCommand('test-runner-extension-0.installTestRunner', () => {
    // Verificar si el paquete está instalado
        exec('npm list -g uadyfmat/test-runner', (error, stdout, stderr) => {
            if (stdout.includes('uadyfmat/test-runner')) {
                // El paquete ya está instalado
                vscode.window.showInformationMessage('Test Runner ya está instalado globalmente.');
            } else {
                // El paquete no está instalado, instalarlo
                const terminal = vscode.window.createTerminal("Terminal de Instalación");
                terminal.sendText("npm i -g uadyfmat/test-runner");
                terminal.show();
            }
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};