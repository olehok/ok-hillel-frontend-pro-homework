let userNum = null;

while (true) {
    userNum = +prompt("Enter whole number");
    if (!isNaN(userNum) && userNum !== 0 && Number.isInteger(userNum)) {
        break
    }
    console.log(`not a whole number`);
}

let i = 1;
let result = "";

while (i * i <= userNum && i >= 1 && i <= 100) {
        result += i + ". ";
        i++;
}

console.log(result);