const vscode = require('vscode');
const setupTestApi = require('./TestExplorer/main.js');
const detectOperatingSystem = require("./OSUtils.js");
const utils = require('./Utils.js');


function activate(context) {
    const userOS = detectOperatingSystem();
    console.log(`OS : ${userOS}`);

    // need it to run the tests in the extension
    // if (vscode.workspace.workspaceFolders[0].uri.fsPath)

    // if not workspace is open, don't run setupTestApi
    if (vscode.workspace.workspaceFolders) {
        setupTestApi(context);
    }

    // Función para instalar Test-Runner
    let installTestRunner = vscode.commands.registerCommand('test-runner-extension.installTestRunner', utils.installExtension);

    // Función para ejecutar Test-Runner con entrada del usuario
    let runTest = vscode.commands.registerCommand('test-runner-extension.runTest', utils.runTestRunner);

    // Comando para verificar Node.js y npm
    let checkNodeNpm = vscode.commands.registerCommand('test-runner-extension.checkNodeNpm', utils.checkNodeAndNpmInstalled);

    // Comando para verificar Git Bash
    let checkGitBash = vscode.commands.registerCommand('test-runner-extension.checkGitBash', utils.checkGitBashInstalled);

    // Agrega ambas funciones a las suscripciones del contexto
    context.subscriptions.push(installTestRunner);
    context.subscriptions.push(runTest);
    context.subscriptions.push(checkNodeNpm);
    context.subscriptions.push(checkGitBash);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};