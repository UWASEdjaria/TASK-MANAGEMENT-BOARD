const head=document.getElementById("head");
const form=document.getElementById("form");
const taskNameInput=document.getElementById("taskName");
const dueDateInput=document.getElementById("dueDate");
const addTaskBtn=document.getElementById("taskBtn");


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