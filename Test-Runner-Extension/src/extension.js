// The module 'vscode' contains the VS Code extensibility API

// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const TestFile = require('./TestFile.js');
const Test = require('./Test.js');
const findSpecFiles = require('./Utils.js');

function activate(context) {

    // need it to run the tests in the extension
    setupTestApi(context);
    let path = vscode.workspace.workspaceFolders[0].uri.fsPath;
    const specFilesFound = findSpecFiles(path);
    console.log(specFilesFound);

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

function deactivate() {}

module.exports = {
    activate,
    deactivate
};