// Створіть клас BankAccount, який буде представляти банківський рахунок.
// Додайте властивість балансу та методи для внесення та зняття грошей.
// class BankAccount {
// Ваш код тут
// }
// const account1 = new BankAccount(1000);
// console.log(account1.getBalance()); // 1000
// account1.deposit(500);
// console.log(account1.getBalance()); // 1500
// account1.withdraw(200);
// console.log(account1.getBalance()); // 1300

class BankAccount {
    balance = 0;
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance
    }
    deposit(deposit) {
        if(deposit > 100000) {
            console.log('you are not allowed to deposit more than 100000 at one time');
            return;
        }
        if(this.balance + deposit >= 150000) {
            let allowedDepo = 150000 - this.balance;
            let returnedDepo = deposit - allowedDepo;
            console.log(`you have reached your maximum per day. ${allowedDepo} added, ${returnedDepo} returned`);
            this.balance = 150000;
            return;
        }
        this.balance = this.balance + deposit;
    }
    withdraw(withdraw) {
        if(withdraw > this.balance) {
            console.log(`not enough money on your account. you can withdraw only ${this.balance} or less`);
            return;
        }
        this.balance = this.balance - withdraw;
    }
}
const account1 = new BankAccount(1000);