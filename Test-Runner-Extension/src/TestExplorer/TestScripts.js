const vscode = require('vscode');
const findSpecFiles = require('./testFinder');

/**
 * @class TestScripts
 * @description This class models the test scripts that are found in the workspace. Its responsibility is to search for test scripts and map them to test items.
 */
class TestScripts {
    constructor() {
        this.tests = [];
    }

    getWorkspaceFolder() {
        return vscode.workspace.workspaceFolders[0].uri.fsPath;
    }

    mapSpecFilesToTests(specFiles) {
        return specFiles.map(specFile => ({
            description: specFile.name,
            name: specFile.name,
        }));
    }

    search() {
        const workspaceFolder = this.getWorkspaceFolder();
        const specFilesFound = findSpecFiles(workspaceFolder);
        this.tests = this.mapSpecFilesToTests(specFilesFound);
        return this.tests;
    }

    getTests() {
        return this.tests;
    }
}

module.exports = TestScripts;