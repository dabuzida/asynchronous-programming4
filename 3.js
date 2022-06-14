function pp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("resolved ok!"), 1000);
  });
}
console.log("start");
pp()
  .then((resolve) => {
    console.log(resolve);
    return pp();
  })
  .then((resolve) => {
    console.log(resolve);
    return pp();
  })
  .then((resolve) => {
    console.log(resolve);
    return pp();
  });
console.log("end");
