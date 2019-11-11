const thingsToPrint = ['hello', 1, 'hi', 2, 3, 4, 5, 6, "hiii", 7];


// for every item in an array, print to the console with a 1 second delay between logs
function printEverySecond(things) {

   things.forEach(thing => {
     let secondsToWait = things.indexOf(thing) * 1000; // need to wait longer for each
     setTimeout(() => console.log(thing), secondsToWait);
   })
}

function printLastThing(number) {
  // using let instead of var would solve this problem, because value of i would be reassigned
  for (var i = 0; i < number; i++) {
    setTimeout(() => console.log(i), 1000 * i)  // 5 5 5 5
  }
}
printEverySecond(thingsToPrint);
// printLastThing(5);


