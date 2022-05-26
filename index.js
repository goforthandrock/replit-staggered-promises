// Promise.all() with delays for each promise
let tasks = [];
for (let i = 0; i < 10; i++) {
  const delay = 500 * i;
  tasks.push(new Promise(async function(resolve) {
    // the timer/delay
    await new Promise(res => setTimeout(res, delay));

    // the promise you want delayed
    // (for example):
    // let result = await axios.get(...);
    let result = await new Promise(r => {
      console.log("I'm the delayed promise...maybe an API call!");
      r(delay); //result is delay ms for demo purposes
    });

    //resolve outer/original promise with result
    resolve(result);
  }));
}

let results = Promise.all(tasks).then(results => {
  console.log('results: ' + results);
});
