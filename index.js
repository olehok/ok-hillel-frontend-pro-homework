let initNumber = 10369;
let num5 = initNumber % 10;
let num4 = (Math.floor (initNumber / 10)) % 10;
let num3 = (Math.floor (initNumber / 100)) % 10;
let num2 = (Math.floor (initNumber / 1000)) % 10;
let num1 = Math.floor (initNumber / 10000);

console.log(initNumber);
console.log(`${num1} ${num2} ${num3} ${num4} ${num5}`);