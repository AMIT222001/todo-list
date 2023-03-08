const todoList = document.querySelector('#todo-list ul');
const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', () => {
    const todoText = todoInput.value;
    todoInput.value = '';
    const newTodo = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'todo-' + (todoList.children.length + 1);
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = todoText;
    newTodo.appendChild(checkbox);
    newTodo.appendChild(label);
    todoList.appendChild(newTodo);


});
todoList.addEventListener('click', (event) => {
    // Check if the clicked element is a checkbox
    if (event.target.type === 'checkbox') {
        // Get the label element for the checkbox
        const label = event.target.nextElementSibling;

        // Apply a
        label.style.textDecoration = event.target.checked ? 'line-through' : 'none';
    }
});
