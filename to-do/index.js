import {Task} from './Task.js'
const input = document.querySelector('.new-task');
const list = document.querySelector('.task-list');
const allTasks = JSON.parse(localStorage.getItem('allTasks')) ?? [];


document.addEventListener('DOMContentLoaded', ()=>{
    const button = document.querySelector('.add-task');
    
    input.addEventListener('keyup', (e) => {
        if(e.code === 'Enter') addNewTask();
    })
    button.addEventListener('click', addNewTask);
})

function addNewTask() {
    const newTask = new Task(input.value);
    allTasks.push(newTask);
    input.value = '';
    localStorage.setItem('allTasks', JSON.stringify(allTasks))
    console.log(allTasks);

    const li = document.createElement('li')
    li.innerText = newTask.name;

    list.appendChild(li);
    
}