const Path = require("path");
const FS   = require("fs");
let Files  = [];

function ThroughDirectory(Directory) {
    FS.readdirSync(Directory).forEach(File => {
        const Absolute = Path.join(Directory, File);
        if (FS.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
        else return Files.push(Absolute);
    });
    console.log("Files",JSON.stringify(Files))
}

ThroughDirectory("./loanapp-fe");