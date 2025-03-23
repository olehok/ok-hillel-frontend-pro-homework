// Створіть HTML-сторінку з 3 кнопками.
// Ваше завдання - створити обробник подій для батьківського елементу,
// який відслідковуватиме кліки на всіх кнопках.
// Покроковий план:
// 1. Створіть HTML-елементи: батьківський контейнер з 3 вкладеними кнопками.
// 2. Додайте обробник подій до батьківського контейнера, який відслідковуватиме кліки.
// 3. Після кліку на будь-якій кнопці, виведіть повідомлення про те, яка саме кнопка була клікнута.

const container = document.createElement("div");
document.body.appendChild(container);

const btn1 = document.createElement("button");
btn1.textContent = "button 1";
container.appendChild(btn1);

const btn2 = document.createElement("button");
btn2.textContent = "button 2";
container.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.textContent = "button 3";
container.appendChild(btn3);

container.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        alert(`clicked on ${e.target.textContent}`);
    } else {
        alert(`click on the button`);
    }
})

