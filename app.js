// selecting Document <input> , <button>, <ul>, <select>
const todoInput = document.querySelector(`.todo-input`);
const todoButton = document.querySelector(`.todo-button`);
const todoList = document.querySelector(`.todo-list`);
const todoNr = document.querySelector(`.todo-nr b`);
const items = todoList.children;
const todoNr2 = document.querySelector(`.todo-nr2 b`);
let counter = 0;
const resetBtn = document.querySelector(`.reset-counter`);
const filterOption = document.querySelector(`.filter-todo`);

//Event listeners
//document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener(`click`, addTodo);
todoList.addEventListener(`click`, deleteTodo);
resetBtn.addEventListener(`click`, deleteCounter);
filterOption.addEventListener(`click`, filterTodo);

//Functions
function addTodo(e) {
  e.preventDefault(); // stop browser refresh
  const todoDiv = document.createElement(`div`); // creating <div> element for new task
  todoDiv.classList.add(`todo`); // adding class="todo" to the generated <div>

  const newTodo = document.createElement(`li`); // adding <li> element to HTML
  newTodo.innerText = todoInput.value; // adding entered value from User input
  newTodo.classList.add(`todo-item`); // adding class="todo-item" to the generated <li>
  todoDiv.appendChild(newTodo); // stick <li> to <div>
  todoInput.value = "";
  todoNr.innerText = items.length+1; // get the count of total tasks

  const completedButton = document.createElement(`button`); // adding 'complete task button'
  completedButton.innerHTML = `<i class="fas fa-check"></i>`; // insert <i> tag each time for new generated task - to be able to have 'check' icon
  completedButton.classList.add(`complete-btn`); // adding class="complete-btn" to generated <button>
  todoDiv.appendChild(completedButton); // stick <button> to <div>

  const trashButton = document.createElement(`button`); // adding 'delete task button'
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`; // insert <i> tag
  trashButton.classList.add(`trash-btn`); // adding class="delete-btn" to generated <button>
  todoDiv.appendChild(trashButton); // stick <button> to <div>
  todoList.appendChild(todoDiv); // append 'main task <div>' to the <ul> tag
  //todoInput.value = ``; // clear input value
}

function deleteTodo(e) {
  const item = e.target; // based on what User is clicking -> assign to 'listItem' what User had clicked

  if (item.classList[0] === `trash-btn`) {
    // if User clicked on 'delete' button which is first(0) class name
    const todo = item.parentElement; // create variable 'item' which stores User target and assign it to parent element - this case to <div> that holds the whole task
    todo.classList.add("fall");
    todo.addEventListener("transitionend", e => {
      todo.remove();
    });
    counter++;
  }

  if (item.classList[0] === `complete-btn`) {
    const todo = item.parentElement;
    todo.classList.toggle(`completed`);
  }
  todoNr2.innerText = counter;
}

/* this need to be updated -> need to delete value*/
function deleteCounter(){
todoNr2.innerHTML = '';
}

function filterTodo(e) {
  const todos = todoList.childNodes; // gets all the tasks
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
          if(!todo.classList.contains("completed")){
            todo.style.display = "flex";
          }else {
            todo.style.display = "none";
          }
          break;
    }
  });
}
