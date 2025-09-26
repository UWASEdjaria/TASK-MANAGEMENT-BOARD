const head=document.getElementById("head");
const form=document.getElementById("form");
const taskNameInput=document.getElementById("taskName");
const dueDateInput=document.getElementById("dueDate");
const addTaskBtn=document.getElementById("taskBtn");


form.addEventListener('click',
    function(e){
     e.preventDefault();

     if(taskNameInput.value.trim()==="")
        alert("Task Name is required");
    return;
     }

);