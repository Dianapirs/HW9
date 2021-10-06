function todoList() {
    const h1 = document.createElement('h1');
    h1.innerText = 'My ToDoList';
    const form = document.createElement('form');
    const input = document.createElement('input');
    const btnOk = document.createElement('button');
    const ul = document.createElement('ul');
    btnOk.innerText = 'Add task';
    form.appendChild(h1);
    form.appendChild(input);
    form.appendChild(btnOk);
    form.appendChild(ul);
    document.body.appendChild(form);
    

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if(input.value) {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const span = document.createElement('span');
            span.innerText = input.value;
            const btnDelete = document.createElement('button');
            btnDelete.innerText = 'Del';
            btnDelete.classList.add('btnDelete');
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(btnDelete);
            ul.appendChild(li);
            span.addEventListener('click', function(){
                const editor = prompt('Change the task');
                if(editor) {
                    span.innerText = editor;
                }
                
            })
            btnDelete.addEventListener('click', function(){
                li.remove();
            })
            
        }
    
        input.value = '';
    })
        
}

todoList();






