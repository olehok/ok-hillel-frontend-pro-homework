// Створіть HTML-сторінку з to-do list з можливістю додавання нових завдань.
// Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань,
// який дозволить видаляти завдання при кліку на них.
// Покроковий план:
// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

const input = document.querySelector("#input");
const toDoList = document.querySelector("#todolist");

toDoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("task")) {
        const taskEdit = document.createElement("input");
        taskEdit.classList.add("edit-input");
        taskEdit.type = "text";
        taskEdit.value = e.target.textContent.trim();
        e.target.replaceWith(taskEdit);
        taskEdit.focus();

        taskEdit.addEventListener("blur", () => {
            const editedTask = document.createElement("p");
            editedTask.classList.add("task");
            editedTask.textContent = taskEdit.value.trim();
            taskEdit.replaceWith(editedTask);
        })
    } else if (e.target.classList.contains("btnDel")) {
        e.target.parentNode.remove();
    } else if (e.target.classList.contains("btnCross")) {
        e.target.parentElement.querySelector(".task").classList.toggle("done");
    }
});

document.querySelector("#btn").addEventListener("click", () => {
    if (input.value.trim()) {
        const item = document.createElement("li");
        toDoList.appendChild(item);

        const task = document.createElement("p");
        task.classList.add("task");
        task.textContent = input.value.trim();
        item.appendChild(task);

        const btnCross = document.createElement("button");
        btnCross.classList.add("btnCross");
        btnCross.textContent = "c";
        item.appendChild(btnCross);

        const btnDel = document.createElement("button");
        btnDel.classList.add("btnDel");
        btnDel.textContent = "del";
        item.appendChild(btnDel);

        input.value = "";
        input.focus();
    } else {
        input.style.background = "#ffbaba";
    }

})

input.addEventListener("click", () => {
    input.style.background = "white";
})
