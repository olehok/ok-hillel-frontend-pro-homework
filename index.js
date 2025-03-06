// Створіть об'єкт, який матиме одну властивість з масивом об'єктів.
// Які представляють контакти у вашій контактній книзі.
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти.
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const obj = {
    phonebook: [
        {name: 'OB', tel: '0987654321', email: 'ob@example.com'},
        {name: 'JK', tel: '0557650000', email: 'jk@example.com'},
        {name: 'VP', tel: '0337651111', email: 'vp@example.com'},
        {name: 'OM', tel: '0337652222', email: 'om@example.com'}
    ],

    getByName(contName) {
        let contact = this.phonebook.find(contactItem => contName === contactItem.name)
        return contact
            ? `${contact.name}, ${contact.tel}, ${contact.email}`
            : `contact "${contName}" not found`;
    },

    addNewContact(name, tel, email) {
        this.phonebook.push({name, tel, email});
    },
}

obj.addNewContact('OG', '0337653333', 'og@example.com');
console.log(obj.getByName('OM'));
console.log(obj.getByName('XX'));
console.log(obj.phonebook);