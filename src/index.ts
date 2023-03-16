const form = document.querySelector('form')!;
const button = document.getElementById('clickButton')! as HTMLButtonElement;
const input = document.getElementById('toDoInput')! as HTMLInputElement;
const list = document.getElementById('toDoList')!


const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const newToDo = input.value
  list.innerHTML += `<li>${newToDo}</li>`
  input.value=''
};


form.addEventListener('submit', handleSubmit)