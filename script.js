// Створіть клас Calculator, який буде мати методи для виконання базових математичних операцій:
// додавання, віднімання, множення та ділення.
// class Calculator {
// Ваш код тут}
// const calc = new Calculator();
// console.log(calc.add(5, 3)); // 8
// console.log(calc.subtract(10, 4)); // 6
// console.log(calc.multiply(3, 6)); // 18
// console.log(calc.divide(8, 2)); // 4

class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b
    }
    multiply(a, b) {
        return a * b
    }
    divide(a, b){
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b
    }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4
console.log(calc.divide(8, 0)); // Cannot divide by zero