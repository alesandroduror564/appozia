/* 
   Filename: complex_code.js

   This code demonstrates a complex implementation of a Task Manager application in JavaScript.
*/

class Task {
  constructor(id, title, description, status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
    this.counter = 1;
  }

  addTask(title, description) {
    const newTask = new Task(this.counter++, title, description, "pending");
    this.tasks.push(newTask);
  }

  deleteTask(id) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  updateTask(id, newTitle, newDescription, newStatus) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.title = newTitle || task.title;
      task.description = newDescription || task.description;
      task.status = newStatus || task.status;
    }
  }

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  getTasksByStatus(status) {
    return this.tasks.filter((task) => task.status === status);
  }
}

// Create an instance of the TaskManager
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask("Implement login feature", "Implement login functionality using JWT");
taskManager.addTask("Refactor code", "Refactor existing codebase for better maintainability");
taskManager.addTask("Write unit tests", "Write unit tests for critical components");

// Get all tasks
console.log("All tasks:");
console.log(taskManager.getAllTasks());

// Update a task
taskManager.updateTask(2, "Refactor code", "Refactor existing codebase for better test coverage", "in progress");

// Get tasks by status
console.log("\nTasks in progress:");
console.log(taskManager.getTasksByStatus("in progress"));

// Delete a task
taskManager.deleteTask(3);

// Get task by ID
console.log("\nTask with ID 2:");
console.log(taskManager.getTaskById(2));

// Get all tasks after modifications
console.log("\nAll tasks after modifications:");
console.log(taskManager.getAllTasks());
...

// Continue adding more functionalities and use cases

// End of code