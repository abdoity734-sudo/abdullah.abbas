let input = document.getElementById("taskInput");
let but = document.getElementById("addBtn");
let list = document.getElementById("taskList");

but.addEventListener("click", function () {

    const task = input.value;

    if (task.trim() === "") {
        return;
    }

    // إنشاء عنصر المهمة
    const li = document.createElement("li");

    // إنشاء Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // إنشاء النص
    const span = document.createElement("span");
    span.textContent = task;

    // عند الضغط على Checkbox يتم شطب المهمة
    checkbox.addEventListener("change", function () {
        span.classList.toggle("done");
    });

    // إنشاء زر الحذف
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
deleteBtn.id = "deleteBtn";
    // حذف المهمة
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // إضافة العناصر داخل li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
});