const fs = require('fs');
const path = require('path');

function findSpecFiles(directory) {
    let specFiles = [];
    const normalizedDirectory = path.normalize(directory);

    function exploreDirectory(currentPath) {
        const files = fs.readdirSync(currentPath, { withFileTypes: true });

        for (const file of files) {
            const fullPath = path.join(currentPath, file.name);
            
            if (file.isDirectory()) {
                exploreDirectory(fullPath);
            } else if (file.name === 'spec.inout') {
                const parentFolderName = path.basename(currentPath);
                specFiles.push({
                    name: parentFolderName,
                    path: currentPath
                });
            }
        }
    }

    exploreDirectory(normalizedDirectory);
    return specFiles;
}

module.exports = findSpecFiles;