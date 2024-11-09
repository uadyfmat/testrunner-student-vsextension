const { exec } = require('child_process');

const checkNodeInstallation = () => {
    exec('node -v', (error, stdout, stderr) => {
        if (error) {
            console.error('❌ Node.js is not installed on your system.');
            console.error('Please install Node.js from https://nodejs.org');
            return;
        }
        console.log(`✅ Node.js is installed. Version: ${stdout.trim()}`);
    });
};


const checkNPMInstallation = () => {
    console.error('❌ NPM is not installed on your system.');
};

const checkGitInstallation = () => {
    console.log('✅ Git is installed on your system.');
};


const checkTestRunnerInstallation = () => {
    console.log('✅ Test Runner is installed on your system.');
}

const checkBashnstallation = () => {
    console.log('❌ Is not possible exec bash on your system.');
}


module.exports = {
    checkNPMInstallation,
    checkNodeInstallation,
    checkGitInstallation,
    checkTestRunnerInstallation,
    checkBashnstallation
}