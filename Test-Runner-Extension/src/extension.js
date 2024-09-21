// The module 'vscode' contains the VS Code extensibility API

// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const TestFile = require('./TestFile.js');
const Test = require('./Test.js');
const findSpecFiles = require('./Utils.js');
const detectOperatingSystem = require("./OSUtils.js");
const utils = require('./Utils.js');

function activate(context) {
    const userOS = detectOperatingSystem();
    console.log(`OS : ${userOS}`);
    // need it to run the tests in the extension
    setupTestApi(context);
    let path = vscode.workspace.workspaceFolders[0].uri.fsPath;
    const specFilesFound = utils.findSpecFiles(path);
    console.log(specFilesFound);

    // Función para instalar Test-Runner
    let installTestRunner = vscode.commands.registerCommand('test-runner-extension-0.installTestRunner', utils.installExtension);

    // Función para ejecutar Test-Runner con entrada del usuario
    let runTest = vscode.commands.registerCommand('test-runner-extension-0.runTest', utils.runTestRunner);

    // Agrega ambas funciones a las suscripciones del contexto
    context.subscriptions.push(installTestRunner);
    context.subscriptions.push(runTest);
}

function setupTestApi(context) {
    const controller = vscode.tests.createTestController(
        'FMAT_UADY_TEST_RUNNER_2024',
        'Test Runner Controller'
    );

    let testFile = new TestFile();
    let tests = testFile.search();

    let testItems = tests.map(test => controller.createTestItem(test.name, test.description));
    for (let item of testItems) {
        controller.items.add(item);
    }

    const handler = (request, _) => {
        const run = controller.createTestRun(request, 'Test Runner', false);
        let tests = request.include;

        if (tests) {
            run.started(tests[0]);
            let myTest = new Test(run, tests[0]);
            myTest.evaluate();
        } else {
            // logic for running all the tests
        }
    }

    const runProfile = controller.createRunProfile('Run', vscode.TestRunProfileKind.Run, handler);
    context.subscriptions.push(controller, runProfile);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};