"use strict";
const form = document.querySelector('form');
const button = document.getElementById('clickButton');
const input = document.getElementById('toDoInput');
const list = document.getElementById('toDoList');
const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = input.value;
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLI.append(newToDo);
    newLI.append(checkbox);
    list.append(newLI);
    input.value = '';
};
form.addEventListener('submit', handleSubmit);
