// Цикл на кожній ітерації пропонує через prompt ввести число більше 100
// (але максимум 10 ітерацій циклу).
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше.
// Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації,
// то функція виводить в консоль останній введення користувача і завершує функцію.

function getOver100(){
    for(let i = 1; i <= 10; i++) {
        let userInput = prompt('enter the number > 100');

        if (userInput === null || userInput.trim() === "") {
            console.log('canceled');
            break;
        }

        let userNum = Number(userInput);

        if (userNum > 100) {
            console.log(`you entered ${userNum}`);
            break;
        } else if (i === 10) {
            console.log('timed out');
        }
    }
}

getOver100();