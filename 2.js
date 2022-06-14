function _f(i) {
  console.log(i);
}

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("resolved ok!"), 1000);
  //   setTimeout(() => reject(new Error("error")), 1000);
});
// finally test
console.log("start");
promise
  .then((resolve) => {
    console.log(resolve);
    return promise;
  })
  .then((resolve) => {
    console.log(resolve);
    return promise;
  })
  .then((resolve) => {
    console.log(resolve);
    return promise;
  });
console.log(1);
console.log(2);
