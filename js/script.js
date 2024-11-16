 
 const  todoInput = document.getElementById('todoInput');
 const  addTodoBtn = document.getElementById('addTodoBtn');
 const  todoList = document.getElementById('todoList');

 function addTodo(){
    const todoText = todoInput.value.trim();

    if (todoText !== ''){
        const todoItem = document.createElement('li');
        todoItem.innerText = todoText;

        const removeBtn = document.createElement('button')
        removeBtn.innerText= 'удалить';
        removeBtn.classList.add('remove-btn');

        removeBtn.addEventListener('click', ()=>{
            todoList.removeChild('todoItem');
        })

        todoList.appendChild(todoItem);
        todoItem.appendChild (removeBtn);

        todoInput.value = '';
    }else{
        alert('вести работу')
    }
 }

 addTodoBtn.addEventListener('click', addTodo);