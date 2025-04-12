// Доробити todolist, в якому буде можливість:
// Додати завдання
// Видалити завдання
// Відзначити як виконану
// Усі дані повинні зберегтися після перезавантаження сторінки.

const input = document.querySelector("#input");
const toDoList = document.querySelector("#todolist");
let isEditing = false;
let taskList;

document.addEventListener("DOMContentLoaded", () => {
    taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    // taskList.forEach(task => {
    //     task.toggleCross = function () {
    //         this.crossed = !this.crossed;
    //     };
    //     addNewTask(task);
    // });
    taskList.forEach(task => addNewTask(task));
    // taskList.forEach(addNewTask);
});

console.log(JSON.parse(localStorage.getItem('taskList')))

// functions
function saveToLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

function finishEdit(taskEdit) {
    if (
        !taskEdit ||
        !taskEdit.parentElement ||
        !document.body.contains(taskEdit)
    ) return;

    if (taskEdit.dataset.edited === "true") return;
    taskEdit.dataset.edited = "true";

    const newValue = taskEdit.value.trim();

    if (newValue) {
        const editedTask = document.createElement("p");
        editedTask.classList.add("task");
        editedTask.textContent = newValue;
        taskEdit.replaceWith(editedTask);
    } else {
        taskEdit.remove();
    }
}

function addNewTask(newTask) {
    const task = document.createElement("li");
    task.setAttribute('data-id', newTask.id);
    task.innerHTML = `
            <p class="task ${newTask.crossed ? 'done' : '' }">${newTask.text}</p>
            <button class="btnCross">c</button>
            <button class="btnDel">del</button>
        `;
    toDoList.appendChild(task);
}

function newTaskObject(text) {
    return {
        id: Date.now().toString(),
        text,
        crossed: false,
        // toggleCross() {
        //     this.crossed = !this.crossed;
        // }
    };
}

// Events
toDoList.addEventListener("click", (e) => {
    const targetId = +e.target.closest('li').dataset.id;
    if (e.target.classList.contains("task")) {
        if (isEditing) return;
        isEditing = true;

        const existingEditInput = document.querySelector(".edit-input");
        if (existingEditInput) {
            finishEdit(existingEditInput);
        }

        const taskEdit = document.createElement("input");
        taskEdit.classList.add("edit-input");
        taskEdit.type = "text";
        taskEdit.value = e.target.textContent.trim();
        e.target.replaceWith(taskEdit);
        taskEdit.focus();

        const blurHandler = () => {
            finishEdit(taskEdit);
            isEditing = false;
            taskEdit.removeEventListener("blur", blurHandler);
        };

        taskEdit.addEventListener("blur", blurHandler);

        taskEdit.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                finishEdit(taskEdit);
                isEditing = false;
                taskEdit.removeEventListener("blur", blurHandler);
            }
        });
        saveToLocalStorage();
    }

    if (e.target.classList.contains("btnDel")) {
        e.target.closest('li').remove();
        taskList = taskList.filter((task) => +task.id !== targetId);
        saveToLocalStorage();
    }

    if (e.target.classList.contains("btnCross")) {
        const crossedTask = taskList.find(task => task.id === targetId);
        crossedTask.crossed = !crossedTask.crossed;
        saveToLocalStorage();
        e.target.parentElement.querySelector(".task").classList.toggle("done", crossedTask.crossed);
    }
});

input.addEventListener("click", () => {
    input.style.background = "white";
});

document.querySelector("#btn").addEventListener("click", () => {
    if (input.value.trim()) {
        let text = input.value.trim();
        const newTask = newTaskObject(text);
        // const newTask = {
        //     id: Date.now().toString(),
        //     text,
        //     crossed: false,
        //     toggleCross() {
        //         this.crossed = !this.crossed;
        //     }
        // };
        taskList.push(newTask);
        saveToLocalStorage();
        addNewTask(newTask);
        input.value = "";
        input.focus();
    } else {
        input.style.background = "#ffbaba";
    }
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let text = input.value.trim();
        const newTask = newTaskObject(text);
        taskList.push(newTask);
        saveToLocalStorage();
        addNewTask(newTask);
        input.value = "";
        input.focus();
    }
});