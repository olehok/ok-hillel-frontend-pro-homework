// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 3, 4, 6, 2, 5, 7];
// removeElement(array,4);
// console.log(array); Результат: [1, 3, 6, 2, 5, 7]

function removeElement(array, item) {
    return array.filter(itemFilt => itemFilt !== item);
}

const arr = [1, 3, 4, 6, 2, 5, 7];
const newArr = removeElement(arr,4);
console.log(newArr);