const vscode = require('vscode');

class Test {
    /**
    * @param {vscode.TestRun} vscodeTestRun
    * @param {vscode.TestItem} testItem
    */  
    constructor(vscodeTestRun, testItem) { 
        this.vscodeTestRun = vscodeTestRun;
        this.testItem = testItem;
    }

    evaluate() {
        let around10secs = Math.floor(Math.random() * 10);
        let run = this.vscodeTestRun;
        let testItem = this.testItem;

        // TODO: something like this

        // send test request to test runner 
        // TestRunnerConnection con = new TestRunnerConnection();
        // con.sendTestRequest(testItem);

        // wait for test runner to finish
        // con.waitForTestRunner();

        // get test result

        // if test passed
        // run.passed(testItem, around10secs);

        // if test failed
        // run.failed(testItem, ..., '...');

        setTimeout(() => {
            if (Math.random() < 0.5) {
                run.passed(testItem, around10secs);
            } else {
                run.failed(testItem, new vscode.TestMessage(`Test failed: ${testItem.label}`));
            }
            run.end();
        }, around10secs);
    }
}

module.exports = Test;