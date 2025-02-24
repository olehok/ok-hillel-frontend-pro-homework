// Написати функцію, яка приймає 1 параметр та скадае значення з тим,
// що передали перший раз і т. д. Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27

function makeSum(){
    let count = 0;
    return function (num){
        count += num;
        return count;
    }
}

const myCount = makeSum();

console.log(myCount(4));
console.log(myCount(6));
console.log(myCount(10));
console.log(myCount(7));