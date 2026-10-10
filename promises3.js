const fs = require("fs");
const util = require("util");
let read = util.promisify(fs.readFile);

Promise.all([
  read("package.json"),
  read("callbacks1.js"),
  read("promises1.js"),
]).then((data) => {
  const [data1, data2, data3] = data;

  console.log(data1.toString());
  console.log(data2.toString());
  console.log(data3.toString());
});