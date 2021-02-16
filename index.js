const os = require("os");
const fs = require("fs");

let path = "text.txt";
var stats = fs.statSync(path);
if (stats.isFile()) {
  console.log("its a file");
}
if (stats.isDirectory()) {
  console.log("its a directory");
}
