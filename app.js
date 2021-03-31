// selecting Document <input> , <button>, <ul>
const todoInput = document.querySelector(`.todo-input`);
const todoButton = document.querySelector(`.todo-button`);
const todoList = document.querySelector(`.todo-list`);
const todoNr = document.querySelector(`.todo-nr b`);
const items = todoList.children;
const todoNr2 = document.querySelector(`.todo-nr2 b`);
let counter = 0;

//Event listeners
todoButton.addEventListener(`click`, addTask);
todoList.addEventListener(`click`, deleteCheck);
 
//Functions
function addTask(e) {
  e.preventDefault(); // stop browser refresh
  const taskDiv = document.createElement(`div`); // creating <div> element for new task
  taskDiv.classList.add(`todo`); // adding class="todo" to the generated <div>

  const newTodo = document.createElement(`li`); // adding <li> element to HTML
  newTodo.innerText = todoInput.value; // adding entered value from User input
  newTodo.classList.add(`todo-item`); // adding class="todo-item" to the generated <li>
  taskDiv.appendChild(newTodo); // stick <li> to <div>

  todoNr.innerText = items.length+1; // get the count of total tasks

  const checkBtn = document.createElement(`button`); // adding 'complete task button'
  checkBtn.innerHTML = `<i class="fas fa-check"></i>`; // insert <i> tag each time for new generated task - to be able to have 'check' icon
  checkBtn.classList.add(`complete-btn`); // adding class="complete-btn" to generated <button>
  taskDiv.appendChild(checkBtn); // stick <button> to <div>

  const deleteBtn = document.createElement(`button`); // adding 'delete task button'
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`; // insert <i> tag
  deleteBtn.classList.add(`delete-btn`); // adding class="delete-btn" to generated <button>
  taskDiv.appendChild(deleteBtn); // stick <button> to <div>
  todoList.appendChild(taskDiv); // append 'main task <div>' to the <ul> tag
  todoInput.value = ``; // clear input value



}

function deleteCheck(event) {
  const listItem = event.target; // based on what User is clicking -> assign to 'listItem' what User had clicked

  if (listItem.classList[0] === `delete-btn`) {
    // if User clicked on 'delete' button which is first(0) class name
    const item = listItem.parentElement; // create variable 'item' which stores User target and assign it to parent element - this case to <div> that holds the whole task
    item.remove();
    counter++;
  }

  if (listItem.classList[0] === `complete-btn`) {
    const item = listItem.parentElement;
    item.classList.toggle(`completed`);
  }

  todoNr2.innerText = counter;
}

