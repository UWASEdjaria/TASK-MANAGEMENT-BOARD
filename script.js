let tasks = [
    {id:1 , name:"Do laundry", due:"2025-09-28", status:"pending"},
    {id:2, name:"Wash dishes", due:"2025-09-29", status:"pending"},
    {id:3, name:"Watch movie", due:"2025-09-30", status:"completed"},
    {id:4, name:"Attend wedding", due:"2025-10-01", status:"pending"},
    {id:5, name:"Attend class", due:"2025-10-01", status:"pending"}
];

const head = document.getElementById("head");
const form = document.getElementById("form");
const taskNameInput = document.getElementById("taskName");
const dueDateInput = document.getElementById("dueDate");
const taskList = document.getElementById("taskList");

// Function to render all tasks
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "flex justify-between items-center border p-2 rounded mb-2";

        // Task text
        const taskText = document.createElement("span");
        taskText.textContent = `${task.name} - ${task.due} [${task.status}]`;
        if(task.status === "completed") {
            taskText.classList.add("line-through", "text-green-600");
        }
        li.appendChild(taskText);

        // Buttons container
        const btns = document.createElement("div");
        btns.className="flex gap-2";

        // Toggle status
        const statusBtn = document.createElement("button");
        statusBtn.textContent = task.status==="pending"?"Mark Done":"Undo";
        statusBtn.className = "ml-2 px-2 py-1 bg-green-500 text-white rounded";
        statusBtn.addEventListener("click", () => {
            task.status = task.status==="pending"?"completed":"pending";
            renderTasks();
        });
        btns.appendChild(statusBtn);

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "ml-2 px-2 py-1 bg-yellow-500 text-white rounded";
        editBtn.addEventListener("click", () => {
            const newName = prompt("Edit task name:", task.name);
            const newDue = prompt("Edit due date (YYYY-MM-DD):", task.due);
            if(newName) task.name = newName;
            if(newDue) task.due = newDue;
            renderTasks();
        });
        btns.appendChild(editBtn);

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "ml-2 px-2 py-1 bg-red-500 text-white rounded";
        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
        });
        btns.appendChild(deleteBtn);

        li.appendChild(btns);
        taskList.appendChild(li);
    });
}

// Handle form submit
form.addEventListener("submit", function(e){
    e.preventDefault();

    if(taskNameInput.value.trim() === ""){
        alert("Task Name is required");
        return;
    }

    const newTask = {
        id: Date.now(),
        name: taskNameInput.value,
        due: dueDateInput.value || "No Date",
        status: "pending"
    };

    tasks.push(newTask);
    renderTasks();

    taskNameInput.value = "";
    dueDateInput.value = "";
});

// Initial render
renderTasks();
