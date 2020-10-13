const Path = require("path");
const fs   = require("fs");
let totalFiles = 0;
let files  = [];
let totalLines = 0;

function ThroughDirectory(Directory) {
    fs.readdirSync(Directory).forEach(File => {
        const Absolute = Path.join(Directory, File);
        if (fs.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
        else return files.push(Absolute);
    });
    totalFiles = files.length
}

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
        resolve(
          totalLines = lineCount + totalLines,
          console.log("totalLines",totalLines) ,
          console.log("totalFiles",totalFiles)  
            );
      }).on("error", reject);
    });
  };
    
const findTotalLinesWithFilePath = () => {
    files.map( (path) => {
     countFileLines(path)
})}

const replaceStrings = () => {
    files = files.map(value => {
    return value.replace("loanapp-fe","./loanapp-fe")
  })
}
  

const runOpeation = async () => {
    await ThroughDirectory("./loanapp-fe");
    await replaceStrings()
    findTotalLinesWithFilePath()
};

runOpeation()