// Promise structure
const myPromise = new Promise((resolve, reject) => {
  resolve("Success");
  // reject("Failed");
})
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

// Chained version
Promise.resolve(null)
  .then((value) => {
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 2;
  })
  .then((value) => {
    console.log(value);
    return 3;
  })
  .then((value) => {
    console.log(value);
    return 4;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });