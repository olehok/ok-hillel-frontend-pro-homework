// Створіть клас Coach, який буде представляти тренера.
// Додайте властивості, такі як ім'я, спеціалізація та рейтинг.
// Також реалізуйте метод для виведення інформації про тренера та його рейтинг
// class Coach {
// Ваш код тут
// }
// const coach1 = new Coach('John Doe', 'Fitness', 4.7);
// const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);
// coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
// coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"

class Coach {
    constructor(name, spec, rating) {
        this.name = name;
        this.spec = spec;
        this.rating = rating;
    }
    displayInfo() {
        console.log(`Coach: ${this.name}, Specialization: ${this.spec}, Rating: ${this.rating}`)
    }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);
coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"