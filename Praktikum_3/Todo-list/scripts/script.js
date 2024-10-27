let lastBackgroundColor = 'white';
let isDarkMode = false;

const fontStyles = ['Arial', 'Times New Roman', 'Georgia', 'Courier New'];
let currentFontIndex = 0;
function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        return; // Do nothing if input is empty
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');

    // Create task text
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;

    // Create delete button
    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('close');
    deleteButton.onclick = function () {
        taskList.removeChild(newTask);
    };

    // Double-click to edit task
    taskText.ondblclick = function () {
        editTask(newTask);
    };

    // Click to mark as completed
    newTask.onclick = function () {
        newTask.classList.toggle('completed');
    };

    // Append elements to task
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);

    // Add task to list
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = '';
}


// Function to delete a task
function deleteTask(element) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(element);
}

function editTask(taskElement) {
    const currentTask = taskElement.firstChild.textContent;
    const newTaskInput = document.createElement('input');
    newTaskInput.type = 'text';
    newTaskInput.value = currentTask;

    // Save edited task on 'Enter'
    newTaskInput.onkeypress = function (e) {
        if (e.key === 'Enter') {
            taskElement.firstChild.textContent = newTaskInput.value;
            taskElement.replaceChild(taskElement.firstChild, newTaskInput);
        }
    };

    taskElement.replaceChild(newTaskInput, taskElement.firstChild);
}

function changeBackgroundColor(color) {
    if (!isDarkMode) {
        document.body.style.backgroundColor = color;
        lastBackgroundColor = color;
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = lastBackgroundColor;
        document.body.style.color = 'black';
    }
}

function increaseFontSize() {
    const currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseFontSize() {
    const currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    if (currentSize > 10) {
        document.body.style.fontSize = (currentSize - 2) + 'px';
    }
}

function changeFontStyle() {
    // Cycle through font styles
    currentFontIndex = (currentFontIndex + 1) % fontStyles.length;
    document.body.style.fontFamily = fontStyles[currentFontIndex];
}
