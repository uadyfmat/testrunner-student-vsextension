const fs = require("fs");
const path = require("path");

function findSpecFiles(directory) {
  let specFiles = [];

  function exploreDirectory(currentPath) {
    const files = fs.readdirSync(currentPath, { withFileTypes: true });
    let inoutFile = null;

    for (const file of files) {
      const fullPath = path.join(currentPath, file.name);
      if (file.isDirectory()) {
        exploreDirectory(fullPath); // If it's a directory, explore its contents
      } else if (file.name.endsWith(".inout")) {
        inoutFile = fullPath;
      }
    }

    if (inoutFile) {
      const parentFolderName = path.basename(currentPath);
      console.log(`Found spec file: ${inoutFile}`);
      specFiles.push({
        name: parentFolderName,
        path: inoutFile,
      });
    }
  }

  exploreDirectory(directory); // Start exploring from the initial directory
  return specFiles;
}

module.exports = findSpecFiles;
