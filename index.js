// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися.
// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
// ladder.up().up().down().showStep(); // 1
// Такий підхід широко використовується в бібліотеках JavaScript.

let ladder = {
    current: 0,
    up: function () {
        this.current++;
        return this;
    },
    down: function () {
        this.current--;
        return this;
    },
    showStep: function () {
        return this.current;
    }
};

console.log(ladder.up().up().down().showStep());