const fs = require("fs");
const util = require("util");
let read = util.promisify(fs.readFile);

function a() {
  return Promise.resolve("a");
}

async function b() {
  return "b";
}

// Both return a promise
console.log(a());
console.log(b());

var run = async () => {
  // Promise version
  read("package.json").then((data) => {
    console.log(data.toString());
  });

  // Async await result
  const data = await read("package.json");
  console.log(data.toString());
};
run();

var run_all = async () => {
  const [data1, data2, data3] = await Promise.all([
    read("package.json"),
    read("callbacks1.js"),
    read("promises1.js"),
  ]);
  console.log(data1.toString());
  console.log(data2.toString());
  console.log(data3.toString());
};
run_all();