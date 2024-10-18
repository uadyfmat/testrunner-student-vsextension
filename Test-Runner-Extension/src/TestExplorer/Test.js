const vscode = require('vscode');
const util = require('util');
const child_process = require('child_process');
const utils = require('../Utils.js');
const detectOperatingSystem = require('../OSUtils.js');  
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
        const osName = detectOperatingSystem();
        let normalizedPath;
        
        if (osName === 'Windows') {
            // window bash command path must start with / in order to be understood as a full path in bash
            normalizedPath = '/' + relativePath.replace(/\\/g, '/').replace(':', '');
        } else {
            // For Unix-based systems (macOS/Linux), use POSIX paths
            normalizedPath = path.posix.normalize(relativePath);
        }
    
        return `test-runner ${normalizedPath}`;
    }

    getShellForOS() {
        const osName = detectOperatingSystem();
        switch (osName) {
            case 'MacOs':
            case 'Linux':
                return '/bin/bash';  // Use bash for macOS and Linux
            case 'Windows':
                return 'C:\\Program Files\\Git\\bin\\bash.exe';  // Use Git Bash for Windows
            default:
                throw new Error('Unsupported OS: ' + osName);
        }
    }

    async executeCommand(command) {
        const shell = this.getShellForOS();  // Get appropriate shell for the OS

        try {
            const { stdout, stderr } = await this.promisifiedExec(command, { shell: shell });
            return { stdout, stderr };
        } catch (error) {
            console.error('Execution failed:', error);
            throw error;
        }
    }

    /**
     * Cleans and normalizes the output by removing extra whitespace and ensuring uniform formatting.
     * This cleanning is need due an error with vscode api where \n without \r in run.end(testMessage) doesn't render as expected
     * @param {string} output - The CLI output to clean.
     * @returns {string} The cleaned output.
     */
    cleanOutput(output) {
        return output
            .replace(/\t+/g, ' ')  // Replace tabs with a single space
            .replace(/\s+$/gm, '') // Trim trailing whitespace on each line
            .replace(/\n/g, '\r\n') // Ensure proper line endings (\r\n)
            .replace(/\r\n{2,}/g, '\r\n'); // Replace multiple consecutive \r\n with a single \r\n
    }

    handleTestResult(stdout, stderr) {
        if (stdout.includes('PASSING')) {
            this.vscodeTestRun.passed(this.testItem, 0);
        } else if (stdout.includes('FAILING')) {
            let failMessage = `Test failed: ${this.testItem.label}`;
            this.vscodeTestRun.failed(this.testItem, new vscode.TestMessage(failMessage));
        } else {
            // this might be a failiure not related to a user coding error, but rather related to the test-runner not able to find a path, or not able to execute the test
            let errorMessage = stderr 
                ? `Test encountered an error: ${stderr.trim()}` 
                : `Internal Error. Test NOT executed. Check extension installation, compiler or interpreters: ${this.testItem.label}`;
            this.vscodeTestRun.errored(this.testItem, new vscode.TestMessage(errorMessage));
        }
    
        if (stdout) this.vscodeTestRun.appendOutput(this.cleanOutput(stdout));
        if (stderr) this.vscodeTestRun.appendOutput(this.cleanOutput(stdout));
    
        this.vscodeTestRun.end();
    }

    async evaluate() {
        // in the workspace, find the spec files
        let workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;
        const specFilesFound = utils.findSpecFiles(workspaceFolder);

        // find the test specific spec file and get its path
        let testSpec = specFilesFound.find(specFile => specFile.name === this.testItem.id);
        let testPath = testSpec.path;

        // normalize the path and execute th e test
        let normalizedCommand = this.normalizeCommand(testPath);

        try {
            const { stdout, stderr } = await this.executeCommand(normalizedCommand);
            this.handleTestResult(stdout, stderr);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Test;