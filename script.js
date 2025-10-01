let tasks = [
    {id:1 , name:"Do laundry", due:"2025-09-28", status:"pending"},
    {id:2, name:"Wash dishes", due:"2025-09-29", status:"pending"},
    {id:3, name:"Watch movie", due:"2025-09-30", status:"completed"},
    {id:4, name:"Attend wedding", due:"2025-10-01", status:"pending"},
    {id:5, name:"Attend class", due:"2025-10-01", status:"pending"}
];

let lastId = 5;

function addId() {
    lastId++;
    return lastId;
}

const head = document.getElementById("head");
const form = document.getElementById("form");
const taskNameInput = document.getElementById("taskName");
const dueDateInput = document.getElementById("dueDate");
const taskList = document.getElementById("taskList");

// Function to render all tasks
function showTasks(filter="all") {
    taskList.innerHTML = "";

    tasks.filter(t=>filter ==="all" || t.status===filter)
         .forEach(task =>{

        const li = document.createElement("li");
        li.className = "flex justify-between items-center border border-none p-2 rounded-xl shadow-lg bg-gray-900 text-white mb-2 transition-transform duration-300 hover:scale-105";

        // Task text
        const taskText = document.createElement("span");
        taskText.textContent = `${task.name} - ${task.due} [${task.status}]`;
        if(task.status === "completed") {
            taskText.classList.add("line-through", "text-yellow-600");
        }
        li.appendChild(taskText);

        // Buttons container
        const btns = document.createElement("div");
        btns.className="flex flex-col sm:flex-row gap-2  font-semibold transtion-transform hover:scale-105"

        // Toggle status:switch
        const statusBtn = document.createElement("button");
        statusBtn.textContent = task.status==="pending"?"✅":"↩️";
        statusBtn.className = "ml-2 p-2 transition-transform duration-300 hover:scale-105";
        statusBtn.addEventListener("click", () => {
            task.status = task.status==="pending"?"completed":"pending";
            showTasks(filter);
        });
        btns.appendChild(statusBtn);

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.addEventListener("click", () => {
            const newName = prompt("Edit task name:", task.name);
            const newDue = prompt("Edit due date (YYYY-MM-DD):", task.due);
            if(newName) task.name = newName;
            if(newDue) task.due = newDue;
            showTasks();
        });
        btns.appendChild(editBtn);

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", () => {
       
            tasks = tasks.filter(t => t.id !== task.id);
            showTasks(filter);
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
        id: addId(),
        name: taskNameInput.value,
        due: dueDateInput.value || "No Date",
        status: "pending"
};

    tasks.push(newTask);
    showTasks();

    taskNameInput.value = "";
    dueDateInput.value = "";
});

