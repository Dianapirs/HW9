function toDoList () {
    let list = document.querySelector('.wrapper');
    list.style.display = 'block';

    let taskList = document.querySelector('.tasks');
    let field = document.querySelector('#field');
    
    function addTask () {
        let task = document.createElement('li');
        task.classList.add('task');
        let newTask = field.value;
        task.append(newTask);
        taskList.appendChild(task);
    }
    field.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            addTask();
        }
    })
}

toDoList();