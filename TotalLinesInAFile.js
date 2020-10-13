const fs   = require("fs");

function countFileLines(filePath){
    return new Promise((resolve, reject) => {
    let lineCount = 0;
    let i = 0;
    fs.createReadStream(filePath)
      .on("data", (buffer) => {
        for (i = 0; i < buffer.length; ++i) {
          if (buffer[i] == 10) lineCount++;
        }
      }).on("end", () => {
        resolve(console.log(lineCount));
      }).on("error", reject);
    });
  };

  countFileLines('./TotalFiles.js')
  