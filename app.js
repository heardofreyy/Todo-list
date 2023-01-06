
const form = document.querySelector("#mainForm");
const input = document.querySelector("#datalist");
const list = document.querySelector(".taskslist");


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
        alert("You can't add an empty task");
        return;
    }
    
    console.log(task);

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "done";

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.id = "taskinput";
    taskInput.value = task;
    taskInput.setAttribute("readonly", "readonly");

    const editButt = document.createElement("input");
    editButt.type = "button";
    editButt.id = "edit";
    editButt.value = "edit";

    const deleteButt = document.createElement("input");
    deleteButt.type = "button";
    deleteButt.id = "delete";
    deleteButt.value = "delete";


    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(taskInput);
    taskDiv.appendChild(editButt);
    taskDiv.appendChild(deleteButt);
    list.appendChild(taskDiv);


    editButt.addEventListener('click', () => {

        if (editButt.value == "edit") {
            taskInput.removeAttribute("readonly");
            editButt.focus();
            editButt.value = "save";
            return;
        }
        
        if (editButt.value == "save") {
            taskInput.setAttribute("readonly", "readonly");
            editButt.value = "edit";
            return;
        }

    });

    deleteButt.addEventListener('click', () => {
        list.removeChild(taskDiv);
    } );
    


});