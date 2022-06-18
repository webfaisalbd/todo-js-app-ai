// finding the elements
const container = document.querySelector('.container');
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('#inputTodo');
const addTodoButton = document.querySelector('#addTodoButton');


// addTodo
const addTodo = (event) => {
    event.preventDefault();
    console.log(todoInput.value);
}

// adding listeners 
todoForm.addEventListener('submit', addTodo)