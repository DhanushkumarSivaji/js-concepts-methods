const Path = require("path");
const fs   = require("fs");
let Files  = [];

function ThroughDirectory(Directory) {
    fs.readdirSync(Directory).forEach(File => {
        const Absolute = Path.join(Directory, File);
        if (fs.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
        else return Files.push(Absolute);
    });
    console.log("Files",JSON.stringify(Files))
}

ThroughDirectory("./loanapp-fe");
