// finding the elements
const container = document.querySelector('.container');
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('#inputTodo');
const addTodoButton = document.querySelector('#addTodoButton');
const todoLists = document.querySelector('#lists');
const messageElement = document.querySelector('#message');

// createTodo
const createTodo = (todoId, todoValue) => {
    const todoElement = document.createElement('li');
    todoElement.id = todoId;
    todoElement.classList.add('li-style');
    todoElement.innerHTML = `
    <span> ${todoValue} </span>
    <span> <button id='deleteButton' class='btn'><i class="fas fa-trash"></i></button> </span>
    `;
    todoLists.appendChild(todoElement);

    const deleteButton = todoElement.querySelector('#deleteButton');
    deleteButton.addEventListener('click', deleteTodo);
}


// delete todo
const deleteTodo = (event) => {
    const selectedTodo = event.target.parentElement.parentElement.parentElement;
    // console.log(selectedTodo);
    todoLists.removeChild(selectedTodo);
    showMessage('todo is deleted', 'danger');

    const todoId = selectedTodo.id;
    
}


// show message
const showMessage = (text, status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(() => {
        messageElement.textContent = '';
        messageElement.classList.remove(`bg-${status}`)
    }, 1000)
}


// getTodosFromLocalStorage
const getTodosFromLocalStorage = () =>{
   return  localStorage.getItem('mytodos') ? JSON.parse(localStorage.getItem('mytodos')) : [];
}


// addTodo
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value;


    // unique id
    const todoId = Date.now().toString();
    createTodo(todoId, todoValue);
    showMessage('todo is added', 'success');

    // adding todo to local storage
    const todos = getTodosFromLocalStorage();
    todos.push({ todoId, todoValue });
    localStorage.setItem('mytodos', JSON.stringify(todos));

    todoInput.value = '';

}

// adding listeners 
todoForm.addEventListener('submit', addTodo)