var fizzbuzz = [];
var count = 1;
function fizzBuzz() {
  if (count % 3 == 0 && count % 5 == 0) {
    fizzbuzz.push("fizzbuzz");
  } else if (count % 3 == 0) {
    fizzbuzz.push("fizz");
  } else if (count % 5 == 0) {
    fizzbuzz.push("buzz");
  } else {
    fizzbuzz.push(count);
  }
  count++;
  console.log(fizzbuzz);
}
fizzBuzz();
//this works only on console no real
//Alternate solution using while loop
var fizzbuzz = [];
var count = 1;
function fizzBuzz(count) {
  while (count <= 30) {
    if (count % 3 == 0 && count % 5 == 0) {
      fizzbuzz.push("fizzbuzz");
    } else if (count % 3 == 0) {
      fizzbuzz.push("fizz");
    } else if (count % 5 == 0) {
      fizzbuzz.push("buzz");
    } else {
      fizzbuzz.push(count);
    }
    count++;
    console.log(fizzbuzz);
  }
}
fizzBuzz(count);
