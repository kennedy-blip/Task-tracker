const form = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const filterButtons = document.querySelectorAll(".filters button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function renderTasks() {
  taskList.innerHTML = "";
  const now = new Date();

  tasks
    .filter(task => {
      if (currentFilter === "all") return true;
      if (currentFilter === "Completed") return task.completed;
      return task.category === currentFilter;
    })
    .forEach((task, index) => {
      const li = document.createElement("li");
      li.className = "task-item";
      if (task.completed) li.classList.add("completed");
      if (task.deadline && new Date(task.deadline) < now && !task.completed) {
        li.classList.add("overdue");
      }

      li.innerHTML = `
        <div class="task-details">
          <strong>${task.title}</strong>
          <em>${task.category || "No category"}</em>
          <small>${task.deadline || "No deadline"}</small>
        </div>
        <div>
          <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleComplete(${index})">
          <button onclick="editTask(${index})">✏️</button>
          <button onclick="deleteTask(${index})">🗑️</button>
        </div>
      `;
      taskList.appendChild(li);
    });
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const deadline = document.getElementById("deadline").value;

  tasks.push({ title, category, deadline, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  form.reset();
});

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function editTask(index) {
  const task = tasks[index];
  document.getElementById("title").value = task.title;
  document.getElementById("category").value = task.category;
  document.getElementById("deadline").value = task.deadline;
  deleteTask(index); // remove old version, re-add on submit
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

renderTasks();