let input = document.getElementById("taskInput");
let but = document.getElementById("addBtn");
let list = document.getElementById("taskList");

but.addEventListener("click", function () {

    const task = input.value;

    if (task.trim() === "") {
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"

    const span = document.createElement("span");
    span.textContent = task;

    checkbox.addEventListener("change", function () {
        span.classList.toggle("done");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
deleteBtn.id = "deleteBtn";
   
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
});