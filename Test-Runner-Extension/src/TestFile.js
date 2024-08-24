
const vscode = require('vscode');
const findSpecFiles = require('./test-finder');

class TestFile {
    constructor() {
        this.tests = [];
    }
    
    search() {
        this.tests = [
            {
                name: 'helloTest',
                description: 'Hello Test',
                input: 'Hello',
                output: 'Hello'
            },
            {
                name: 'helloTest2',
                description: 'Hello Test 2',
                input: 'Bye',
                output: 'Bye'
            }
        ]

        return this.tests;
    }
    
    tests() {
        return this.tests;
    }
}

module.exports = TestFile;