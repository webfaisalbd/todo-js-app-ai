// finding the elements
const container = document.querySelector('.container');
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('#inputTodo');
const addTodoButton = document.querySelector('#addTodoButton');
const todoLists = document.querySelector('#lists');
const messageElement = document.querySelector('#message');

// createTodo
const createTodo = (todoId, todoValue) =>{
    const todoElement = document.createElement('li');
    todoElement.id = todoId;
    todoElement.classList.add('li-style');
    todoElement.innerHTML = `
    <span> ${todoValue} </span>
    <span> <button class='btn'><i class="fas fa-trash"></i></button> </span>
    `;
    todoLists.appendChild(todoElement);
    showMessage('todo is added', 'success');
}


// show message
const showMessage = (text, status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(()=>{
        messageElement.textContent = '';
        messageElement.classList.remove(`bg-${status}`)
    },1000)
}

// addTodo
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value;


    // unique id
    const todoId = Date.now().toString();
    createTodo(todoId, todoValue);

}

// adding listeners 
todoForm.addEventListener('submit', addTodo)