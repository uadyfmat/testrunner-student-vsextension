const fs = require('fs');
const path = require('path');
const vscode = require('vscode');
const { exec } = require('child_process');
const detectOperatingSystem = require("./OSUtils.js");
const DependencyChecker = require('./CheckDependenses.js');
const InstallDependencies = require('./InstallDependencies.js');

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


const doctor = async () => {
    const userOS = detectOperatingSystem();

    // el checar la instalación de node es global así que no es necesario definir el sistema operativo aquí. 
    const isNodeInstaled = await DependencyChecker.checkNodeInstallation();
    console.log("Sistema operativo: ", userOS);
    switch (userOS) {
        case "Windows":
            // windows necesita git, node, npm y test runner
            DependencyChecker.checkNPMInstallation();
            DependencyChecker.checkGitInstallation();
            DependencyChecker.checkTestRunnerInstallation();

            break;

        case "Linux":
            // Linux solo necesita revisar node y npm
            DependencyChecker.checkNPMInstallation();
            break;

        case "MacOs":
            // Mac solo necesita el bash, node y npm
            const isNPMInstalled = await DependencyChecker.checkNPMInstallation();
            const isBashInstalled = await DependencyChecker.checkBashnInstallation();
            break;

        default:
            break;
    }
}

const installNodeAndNPMBtn = async () => {
    const userOS = detectOperatingSystem();
    switch (userOS) {
        case "Windows":
            // Instalación de node por url
            break;
        case "Linux":
            // Instalación de node para Linux
            break;
        case "MacOs":
            // Instalación de node y npm para MacOs
            const isNodeInstalled = await DependencyChecker.checkNodeInstallation();
            const isNPMInstalled = await DependencyChecker.checkNPMInstallation();

            if (!isNodeInstalled || !isNPMInstalled) {
                console.log('Checking for Homebrew...');
                const isHomeBrewInstalled = await DependencyChecker.checkHomeBrewInstallation();
                if (!isHomeBrewInstalled) {
                    console.log("Installing Homebrew...")
                    await InstallDependencies.installHomeBrew();
                }
                console.log("Installing Node.js and npm");
                await InstallDependencies.installNodeAndNpmWithBrew();
            } else {
                console.log("Node.js and npm already installed");
            }

            break;
        default:
            break;
    }
}

module.exports =
{
    findSpecFiles,
    installExtension,
    runTestRunner,
    installNodeAndNPMBtn,
    doctor
};