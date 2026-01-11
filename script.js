const addTaskBtn = document.getElementById("addTask");
const taskForm = document.getElementById("taskInfo");

addTaskBtn.addEventListener("click", function() {
    taskForm.style.display = "block";
});

const current = document.getElementById("currentTasks");

taskForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const task = {
        className: document.getElementById("className").value,
        assignment: document.getElementById("taskName").value,
        dueDate: document.getElementById("dueDate")
    };

    current.textContent += "<p>task</p>"

    taskForm.reset();
    taskForm.style.display = "none"
});