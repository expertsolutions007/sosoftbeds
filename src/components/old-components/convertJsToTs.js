const fs = require('fs');
const path = require('path');

// Function to convert .js and .jsx files to .ts and .tsx recursively
const convertJsToTs = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dir}:`, err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);

      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error(`Error stating file ${filePath}:`, err);
          return;
        }

        if (stat.isDirectory()) {
          // Recursively convert files in subdirectories
          convertJsToTs(filePath);
        } else if (path.extname(file) === '.js') {
          const newFilePath = filePath.replace(/\.js$/, '.ts');
          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              console.error(`Error renaming file ${filePath} to ${newFilePath}:`, err);
            } else {
              console.log(`Renamed ${filePath} to ${newFilePath}`);
            }
          });
        } else if (path.extname(file) === '.jsx') {
          const newFilePath = filePath.replace(/\.jsx$/, '.tsx');
          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              console.error(`Error renaming file ${filePath} to ${newFilePath}:`, err);
            } else {
              console.log(`Renamed ${filePath} to ${newFilePath}`);
            }
          });
        }
      });
    });
  });
};

// Start converting from the current directory
convertJsToTs(process.cwd());