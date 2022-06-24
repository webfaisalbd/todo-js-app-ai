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
    showMessage();
}


// show message
const showMessage = () => {
    messageElement.textContent = 'todo is created';
    messageElement.classList.add('bg-success');
    setTimeout(()=>{
        messageElement.textContent = '';
        messageElement.classList.remove('bg-success')
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