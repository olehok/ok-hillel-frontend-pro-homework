let userNum = +prompt("Enter 3-digit number");

if (userNum && userNum >= 100 && userNum <= 999) {
    let num3 = userNum % 10;
    let num2 = (Math.floor(userNum / 10)) % 10;
    let num1 = Math.floor(userNum / 100);

    console.log(num1, num2, num3);

    if (num1 === num2 && num1 === num3) {
        console.log('3 equal digits');
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        console.log('partly equal digits');}
    else {
        console.log('not equal digits');
    }
} else {alert('try again')}
