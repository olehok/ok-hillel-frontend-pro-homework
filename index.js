// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
//     Вихідний рядок та символи для видалення задає користувач.

let initString = prompt('type the text');
let initCutString = prompt('type the cutting text');
let toCutArr = initCutString.split('');

function cutFromString(str2Cut, arrCut) {
    let initArr = str2Cut.split('');

    for(let i = 0; i < arrCut.length; i++) {
        initArr = initArr.filter((element) => element !== arrCut[i]);
    }

    return  initArr.join('');
}

let filteredString = cutFromString(initString, toCutArr);
console.log(filteredString);