// Сумма зарплат
// Дізнатись суму всіх зарплат користувачів
// Об'єкт може містити невідому кількість департаментів та співробітників

let companyX = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
}

function sumSalary(company) {
    let sum = 0;

    if (Array.isArray(company)) {
        company.forEach(item => {
            sum += item.salary;
        })
    } else {
        // Object.values(company).forEach(subItem => {
        //     sum += sumSalary(subItem);
        // }) // values метод
        Object.keys(company).forEach(key => {
            sum += sumSalary(company[key]);
        })
    }
    return sum;
}

let companyXsalary = sumSalary(companyX);
console.log(companyXsalary);