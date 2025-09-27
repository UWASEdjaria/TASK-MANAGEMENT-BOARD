
let task=[
    {id:1 , name:"Do laundry", due:"2025-09-28",   status:"pending"},
    {id:2,  name:"Wash dishes", due: "2025-09-29", status: "Pending"},
    {id:3,  name: "Watch movie", due: "2025-09-30", status: "Completed"},
    {id:4,  name:"attend wedding",due:"2025-10-01", status:"pending"},
    {id:5,  name: "Attend class", due: "2025-10-01", status: "Pending" }
]
const head=document.getElementById("head");
const form=document.getElementById("form");
const taskNameInput=document.getElementById("taskName");
const dueDateInput=document.getElementById("dueDate");
const addTaskBtn=document.getElementById("taskBtn");
const taskList = document.getElementById("taskList");

function renderTask(){
    taskList.innerHTML="";
    task.forEach(task=>{
const li=document.createElement("li");
li.textContent=task.name +"-"+task.due + task.status;
  
//Status button
const statusBtn=document.createElement("button");
statusBtn.textContent="Toggle status";
statusBtn.style.marginLeft="10px";
statusBtn.addEventListener('click',()=>{
    task.status=task.status==="pending"?"completed":"pending";
    renderTask();
});
//Edit button
const editBtn=document.createElement("button");
editBtn.textContent="Edit";
editBtn.style.marginLeft = "10px";
editBtn.addEventListener("click", () => {
const newName = prompt("Edit task name:", task.name);
const newDue = prompt("Edit due date (YYYY-MM-DD):", task.due);
if (newName) task.name = newName;
if (newDue) task.due = newDue;
 renderTasks();
 });
//delete button
const deleteTaskBtn=document.createElement("button");
deleteTaskBtn.textContent="Delete";
deleteBtn.style.marginLeft = "10px";
deleteTaskBtn.style.backgroundColor="red";
deleteTaskBtn.addEventListener('click',()=>{
    task=task.filter(t=>t.id !== task.id);
    renderTask();
});
//append button
li.appendChild(statusBtn);
li.appendChild(editBtn);
li.appendChild(deleteBtn);
task.appendChild(li);

  })};
form.addEventListener('submit',
    function(e){
     e.preventDefault();

     if(taskNameInput.value.trim()===""){
        alert("Task Name is required");
    return;
     }  

 const taskList=document.getElementById("taskList") ;  
 const li=document.createElement("li");
 li.textContent=taskNameInput.value + "-" + dueDateInput.value;
 taskList.appendChild(li);

 taskNameInput.value="";
 dueDateInput.value="";


});