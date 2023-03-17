"use strict";
const form = document.querySelector('form');
const button = document.getElementById('clickButton');
const input = document.getElementById('toDoInput');
const list = document.getElementById('toDoList');
const todos = [];
const displayList = () => {
    list.innerHTML = todos.map(todo => `<li><input type="checkbox" checked=${todo.completed}/>${todo.text}</li>`).join('');
};
const addToDo = () => {
    const newToDo = {
        text: input.value,
        completed: false
    };
    todos.push(newToDo);
    input.value = '';
};
const handleSubmit = (e) => {
    e.preventDefault();
    addToDo();
    displayList();
};
form.addEventListener('submit', handleSubmit);
