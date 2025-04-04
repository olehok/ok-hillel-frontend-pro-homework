const input = document.querySelector("#input");
const toDoList = document.querySelector("#todolist");
let isEditing = false;

toDoList.addEventListener("click", (e) => {
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

    } else if (e.target.classList.contains("btnDel")) {
        e.target.parentNode.remove();
    } else if (e.target.classList.contains("btnCross")) {
        e.target.parentElement.querySelector(".task").classList.toggle("done");
    }
});

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

document.querySelector("#btn").addEventListener("click", addNewTask);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addNewTask();
    }
});

function addNewTask() {
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
}

input.addEventListener("click", () => {
    input.style.background = "white";
});