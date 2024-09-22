let usrNum = +prompt('enter integer number');
let count = 0;
let isPrime = true;

for (let i = 1; i < usrNum; i++) {
    if (usrNum % i === 0) {
        count++;
    }
    if (count > 1) {
        isPrime = false;
        break;
    }
}

if (isPrime && usrNum > 1) {
    console.log(`${usrNum} is prime`);
} else {
    console.log(`${usrNum} is not prime`);
}