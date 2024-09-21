const vscode = require('vscode');
const setupTestApi = require('./TestExplorer/main.js');
const detectOperatingSystem = require("./OSUtils.js");
const utils = require('./Utils.js');


function activate(context) {
    const userOS = detectOperatingSystem();
    console.log(`OS : ${userOS}`);

    // need it to run the tests in the extension
    setupTestApi(context);

    // Función para instalar Test-Runner
    let installTestRunner = vscode.commands.registerCommand('test-runner-extension.installTestRunner', utils.installExtension);

    // Función para ejecutar Test-Runner con entrada del usuario
    let runTest = vscode.commands.registerCommand('test-runner-extension.runTest', utils.runTestRunner);

    // Agrega ambas funciones a las suscripciones del contexto
    context.subscriptions.push(installTestRunner);
    context.subscriptions.push(runTest);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};