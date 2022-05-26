let tasks = [];
for (let i = 0; i < 10; i++) {
  const delay = 5000 * i;
  tasks.push(new Promise(async function(resolve) {
    // the timer/delay
    await new Promise(res => setTimeout(res, delay));

    // the promise you want delayed
    // (for example):
    // let result = await axios.get(...);
    let result = await new Promise(async r => {
      //console.log("I'm the delayed promise"+delay+"...maybe an API call!");
			fetch("https://api.stadtpuls.com/api/v3/sensors/91/records")
      //throw "error"
      return r; //result is delay ms for demo purposes
    });

    //resolve outer/original promise with result
    resolve(result);
  }));
}

let results = Promise.all(tasks).then(results => {
  console.log('results: ' + results);
});