// Exercise - Find the Bugs present in this JS file using the developer tools in the browser.
let number = 20;
let a = 2;
b = 4;
let array = [];
for(let i = 0; i < number; i += 1 ) {
  console.log(`The double of the number ${j} is ${j*2}`);
  array.push(i*2);
}

function sum (a, b) {
  return a+b;
}

function sum (a, b, c) {
  return a + b * 2;
}
}
console.log( `the sum of the numbers ${a} and ${b} is ${sum(a, b)}` );
console.log( `the double of the sum of the numbers ${a} and ${b} is ${sum(a, b, c)}` );
console.log( `the last value in the array ${array} is ${array[array.length]}.` );
