// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо.
// Створіть метод об'єкту для отримання та відображення цих даних.

const user = {
    name: 'Bob',
    age: 30,
    city: 'LA',
    email: 'bob@example.com',
    showUserData() {
        return `username is ${this.name}, ${this.age} years old, from ${this.city}, email ${this.email} `
    }
};

console.log(user.showUserData());