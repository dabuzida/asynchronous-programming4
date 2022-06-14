async function run() {
  function pp() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("resolved ok!"), 1000);
    });
  }
  function qq() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error("rejected!!")), 1000);
    });
  }
  console.log("start");
  await pp()
    .then((resolve) => {
      console.log(resolve);
      return pp();
    })
    .then((resolve) => {
      console.log(resolve);
      return qq();
    })
    .then((resolve) => {
      console.log(resolve);
      return pp();
    });
  console.log("end");
}
run();
