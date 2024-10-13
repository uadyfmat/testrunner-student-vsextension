const { exec } = require('child_process');

const checkNodeInstallation = () => {
    return new Promise((resolve) => {
        exec('node -v', (error, stdout, stderr) => {
            if (error) {
                console.error('❌ Node.js is not installed on your system.');
                console.error('Please install Node.js from https://nodejs.org');
                resolve(false);
            }
            console.log(`✅ Node.js is installed. Version: ${stdout.trim()}`);
            resolve(true);
        });
    });
};


const checkNPMInstallation = () => {
    return new Promise((resolve) => {
        exec('npm -v', (error) => {
            if (error) {
                console.error('❌ NPM is not installed on your system.');
                resolve(false);
            }
            console.log('✅ npm is installed on your system.');
            resolve(true);
        })
    })

};

const checkGitInstallation = () => {
    console.log('✅ Git is installed on your system.');
};


const checkTestRunnerInstallation = () => {
    console.log('✅ Test Runner is installed on your system.');
}

const checkBashnInstallation = () => {
    return new Promise((resolve) => {
        exec('bash --version', (error) => {
            if (error) {
                console.log('❌ Is not possible exec bash on your system.');
                resolve(false);
            }
            console.log('✅ Bash is installed on your system.');
            resolve(true);
        });
    });
}

const checkHomeBrewInstallation = () => {
    return new Promise((resolve) => {
        const checkBrew = `brew --version`;
        exec(checkBrew, (error) => {
            if (error) {
                console.log('❌ Homebrew is not installed.');
                resolve(false);
            } else {
                console.log('✅ Homebrew is installed.');
                resolve(true);
            }
        });
    });
}

module.exports = {
    checkNPMInstallation,
    checkNodeInstallation,
    checkGitInstallation,
    checkTestRunnerInstallation,
    checkBashnInstallation,
    checkHomeBrewInstallation
}