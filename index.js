// Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне
// лише числових елементів даного масиву.

let initArr = [1, 'a', true, 3, null, undefined, 56, '8', '45px'];

function arMean(array) {
    let arrNum = array.filter((item) => typeof item === 'number');

    if (arrNum.length === 0) {
        return 0;
    }

    let sum = 0;
    // alt method for
    // for (let i = 0; i < arrNum.length; i++) {
    //     sum += arrNum[i];
    // }
    arrNum.forEach(item => sum += item);

    return sum / arrNum.length;
}

let result = arMean(initArr);
console.log(result);