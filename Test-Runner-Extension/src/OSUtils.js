const os = require('os');

function detectOperatingSystem() {
    const platform = os.platform();

    let osName;

    switch (platform) {
        case 'darwin':
            osName = "MacOs";
            break;
        case 'win32':
            osName = "Windows";
            break;
        case 'linux':
            osName = "Linux";
            break;
        default:
            osName = "Another OS";
            break;
    }

    const userOS = osName;

    return userOS;
}

module.exports = detectOperatingSystem;