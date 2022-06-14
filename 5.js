async function run() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("resolved ok!"), 1000);
  });
  function delayed() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log("waiting");
        resolve(11);
      }, 1000);
    });
  }

  console.log(promise);
  //   console.log(">>", delayed());
  let x = await delayed();
  console.log(">>", x);
  console.log(promise);
  console.log(await promise);
}

run();
