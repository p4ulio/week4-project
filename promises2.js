// Errors flow down to the first catch
Promise.resolve(null)
  .then(() => 1)
  .then((value) => {
    console.log(value);
    return 2;
  })
  .then((value) => {
    console.log(value);
    throw "Error Occurred";
  })
  .then((value) => {
    console.log("This will not run");
  })
  .catch((err) => {
    console.log(err);
  });

// Promise with async code (reading a file)
let fs = require("fs");

new Promise((resolve, reject) => {
  fs.readFile("package.json", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
})
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });

// Promisification
const util = require("util");
let read = util.promisify(fs.readFile);

read("package.json").then((data) => {
  console.log(data.toString());
});