const task_creation_button = document.getElementById('task-creation-button');
const input = document.getElementById('input');

function getTasks() {
    let data = localStorage.getItem('tasks');
    if (data !== null) {
        return JSON.parse(data);
    } else {
        return false;
    }
}

function setTask(text) {
    let data = getTasks();
    if (data === false) {
        data = {};
    }

}

task_creation_button.addEventListener('click', (event) => {
    setTask(input.value);
});