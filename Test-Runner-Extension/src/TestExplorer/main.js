/**
 * @fileoverview This file contains the main logic for the Test Explorer extension.
 * It sets up the Test Controller, creates Test Items, and handles the Test Run.
 * 
 * the @see setupTestApi is what is need to call to initialize the Test Explorer.
 */

const vscode = require('vscode');
const TestScripts = require('./TestScripts'); 
const Test = require('./Test'); 

function initializeTestController() {
    return vscode.tests.createTestController(
        'FMAT_UADY_TEST_RUNNER_2024', 
        'Test Runner Controller'
    );
}

function createTestItems(testScripts, controller) {
    return testScripts.map(test => controller.createTestItem(test.name, test.description));
}

function addTestItemsToController(testItems, controller) {
    for (let item of testItems) {
        controller.items.add(item);
    }
}

function handleTestRun(controller) {
    return (request, _) => {
        const run = controller.createTestRun(request, 'Test Runner', false);
        let tests = request.include;

        if (tests) {
            run.started(tests[0]);
            let myTest = new Test(run, tests[0]);
            myTest.evaluate();
        } else { // if no specific test is set, then run all the tests
            
        }
    };
}

function setupTestApi(context) {
    const controller = initializeTestController();
    let testScripts = new TestScripts().search();

    // show all the found items in the Test Explorer
    let testItems = createTestItems(testScripts, controller);
    addTestItemsToController(testItems, controller);

    // when one of the tests is run, this handler will be called
    const handler = handleTestRun(controller);
    const runProfile = controller.createRunProfile('Run', vscode.TestRunProfileKind.Run, handler);
    
    context.subscriptions.push(controller, runProfile);
}

module.exports = setupTestApi;