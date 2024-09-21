const vscode = require('vscode');
const util = require('util');
const child_process = require('child_process');
const findSpecFiles = require('./Utils.js');
const path = require('path');

/**
 * @class Test
 * @description This class models a test within vscode. It is responsible for executing the test and reporting the result to the vscode test explorer.
 */
class Test {
    /**
    * @param {vscode.TestRun} vscodeTestRun
    * @param {vscode.TestItem} testItem
    */  
    constructor(vscodeTestRun, testItem) { 
        this.vscodeTestRun = vscodeTestRun;
        this.testItem = testItem;
        this.promisifiedExec = util.promisify(child_process.exec);
    }

    normalizeCommand(relativePath) {
        let command = `test-runner /${relativePath}`;
        let normalizedCommand = command.replace(/\\/g, '/');
        return normalizedCommand.replace(':', '');
    }

    async executeCommand(command) {
        console.log(command);
        try {
            const { stdout, stderr } = await this.promisifiedExec(command, { shell: 'C:\\Program Files\\Git\\bin\\bash.exe' });
            return { stdout, stderr };
        } catch (error) {
            console.error('Execution failed:', error);
            throw error;
        }
    }

    handleTestResult(stdout) {
        if (stdout.includes('FAILING')) {
            this.vscodeTestRun.failed(this.testItem, new vscode.TestMessage(`Test failed: ${this.testItem.label}`));
        } else {
            this.vscodeTestRun.passed(this.testItem, 0);
        }
    }

    async evaluate() {
        // in the workspace, find the spec files
        let workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;
        const specFilesFound = findSpecFiles(workspaceFolder);

        // find the test specific spec file and get its path
        let testSpec = specFilesFound.find(specFile => specFile.name === this.testItem.id);
        let testPath = testSpec.path;

        // normalize the path and execute th e test
        let normalizedCommand = this.normalizeCommand(testPath);

        try {
            const { stdout } = await this.executeCommand(normalizedCommand);
            console.log(stdout);
            this.handleTestResult(stdout);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Test;