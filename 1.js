let p = new Promise((resolve, reject) => {
  //   resolve();
  //   resolve(1);
  //   reject(123);
  setTimeout(() => resolve("완료"), 1000);
});

console.log("start");
console.log(p);
p.then((resolve) => {
  console.log(resolve);
  return p;
})
  .then((resolve) => {
    console.log(resolve);
    return p;
  })
  .then(console.log());
console.log("end");
