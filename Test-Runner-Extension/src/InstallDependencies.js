const { exec } = require('child_process');


// Mac's Dependencies

const installHomeBrew = () => {
    return new Promise((resolve, reject) => {
        const installBrew = `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`;
        exec(installBrew, (error) => {
            if (error) {
                console.log('❌ Failed to install Homebrew:', error);
                reject(error);
            } else {
                console.log('✅ Homebrew installed successfully.');
                resolve();
            }
        });
    });
}

const installNodeAndNpmWithBrew = () => {
    return new Promise((resolve, reject) => {
        const installNode = `brew install node`;
        exec(installNode, (error) => {
            if (error) {
                console.log('❌ Failed to install Node.js and npm:', error);
                reject(error);
            } else {
                console.log('✅ Node.js and npm installed successfully.');
                resolve();
            }
        });
    });
}

module.exports = {
    installHomeBrew,
    installNodeAndNpmWithBrew
}