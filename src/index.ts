interface Todo {
  text: string;
  completed: boolean;
}

const form = document.querySelector('form')!;
const button = document.getElementById('clickButton')! as HTMLButtonElement;
const input = document.getElementById('toDoInput')! as HTMLInputElement;
const list = document.getElementById('toDoList')!

const todos: Todo[] = [];

const displayList = () => {
  list.innerHTML = todos.map(todo => `<li><input type="checkbox" checked=${todo.completed}/>${todo.text}</li>`).join('')
}

const addToDo = () => {
  const newToDo: Todo = {
    text: input.value,
    completed: false
  }
  todos.push(newToDo)
  input.value=''
}

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  addToDo();
  displayList();
};


form.addEventListener('submit', handleSubmit)