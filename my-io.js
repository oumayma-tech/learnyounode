
var fs = require('fs'); 
file = process.argv[2];
 file = fs.readFileSync(file);
 to_string = file.toString(); 
 lines = to_string.split("\n"); 
 console.log(lines.length-1);
