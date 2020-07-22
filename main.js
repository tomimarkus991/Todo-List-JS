const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// Create a Todo Template
const generateTemplate = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="span">${todo}</span>
    <i class="fas fa-trash delete"></i>
    </li>`;
    return html;
};

// Add a Todo
addTodo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodo.add.value.trim();
    if (todo.length) {
        list.innerHTML += generateTemplate(todo);
        addTodo.reset();
    }
});

// Delete a todo
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// Find a correct Todo
const filterTodos = term => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        // Hide a diffetent Todo
        .forEach(todo => todo.classList.add('filtered'));
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
}

// Search for the Todo
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

