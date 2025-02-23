let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    if (taskInput.value.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }
    
    const task = {
        id: Date.now(),
        text: taskInput.value,
        completed: false,
    };
    
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
}

function toggleComplete(id) {
    tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
    renderTasks();
}

function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    }
}

function renderTasks() {
    const pendingList = document.getElementById("pendingTasks");
    const completedList = document.getElementById("completedTasks");
    
    pendingList.innerHTML = "";
    completedList.innerHTML = "";
    
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="${task.completed ? 'completed' : ''}">${task.text}</span> <button onclick="toggleComplete(${task.id})">✔</button> <button onclick="deleteTask(${task.id})">❌</button>`;
        
        if (task.completed) {
            completedList.appendChild(li);
        } else {
            pendingList.appendChild(li);
        }
    });
}
