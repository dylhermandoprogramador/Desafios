const input = document.getElementById("new-task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = input.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");

    li.textContent = taskText;

    li.addEventListener("click", function () {
      li.remove();
    });
    taskList.appendChild(li);
    input.value = "";
  }
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});