const addTask = () => {
	const taskInput = document.getElementById("inputTask");
	const task = taskInput.value;
	if (!task) return;
	const taskList = document.getElementById("taskList");
	const newTask = document.createElement("div");
	newTask.classList.add("task");

	const taskText = document.createElement("div");
	taskText.classList.add("task-text");
	taskText.innerHTML = task;

	const deleteTask = document.createElement("button");
	deleteTask.innerHTML = "delete";
	deleteTask.onclick = () => {
		taskList.removeChild(newTask);
		console.log(deleteTask);
	};

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	console.log(checkbox);
	checkbox.onchange = () => {
		if (checkbox.checked) {
			newTask.classList.add("checked");
		} else {
			newTask.classList.add("checked");
			saveData();
		}
	};
	newTask.appendChild(checkbox);
	newTask.appendChild(taskText);
	newTask.appendChild(deleteTask);
	taskList.appendChild(newTask);
	taskInput.value = "	";
};
