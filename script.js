// потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це властивості.
// Є масив з оцінками, це також властивість. І є можливість отримати вік студента
// та його середній бал – це методи. у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів,
// спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність,
// щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true,
// коли викликаємо .absent() - записується false. Передбачте будь-який захист від того,
// щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість,
// present та absent – методи. Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування
// (кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більша ніж 90,
// а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
// якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
// створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

function Student(firstName, surname, birthYear) {
    this.firstName = firstName;
    this.surname = surname;
    this.birthYear = +birthYear;
    this.grades = [];
    this.attendances = [];

    this.getAverageGrade = function () {
        return this.grades.length === 0
            ? 0
            : this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length;
    };
    this.getAge = function () {
        return new Date().getFullYear() - this.birthYear;
    }
    this.addGrade = function (grade) {
        if (this.grades.length >= 25) {
            return this.grades;
        } else
            this.grades.push(+grade);
    }
    this.addPresent = function () {
        if (this.attendances.length >= 25) {
            console.log('25 attendances reached');
            return;
        }
        this.attendances.push(true);
    }
    this.addAbsent = function () {
        if (this.attendances.length >= 25) {
            console.log('25 attendances reached');
            return;
        }
        this.attendances.push(false);
    }
    this.summary = function () {
        const averageAttendances = this.attendances.filter(presence => presence === true).length
            / this.attendances.length || 0;
        const averageGrade = this.getAverageGrade();
        if (averageAttendances > 0.9 && averageGrade > 90) {
            console.log('COOL');
        } else {
            console.log("Try harder");
        }
    }
}

// Example
const pot = new Student("Pol", "Pot", 1984);
pot.addPresent();
pot.addPresent();
pot.addPresent();
pot.addGrade(95);
pot.addGrade(92);
pot.addGrade(89);
pot.addGrade(89);
console.log(pot.getAge());
console.log(pot.getAverageGrade().toFixed(1));
pot.summary();