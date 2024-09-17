while (true) {
    let userNum = +prompt("Enter whole number");
    if (!isNaN(userNum) && userNum.trim() !== "") {
        break
    }
    console.log(`not a whole number`);
}
let i = 1;

