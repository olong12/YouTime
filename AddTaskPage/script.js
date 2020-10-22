const task_input = document.getElementById('task-input')
const deadline_input = document.getElementById('deadline-input')
const button = document.getElementById('add-task-button')

//how to add input to a task list that exists off this current screen?
//in general, how to make elements that persist between screens (different html files?)
function addTask() {
	if (!task_input.value) {
		alert("Please enter a valid task name.")
	} else if (!deadline_input.value) { // MONTH/DAY/YEAR SELECTION INSTEAD OF TEXT BOX?
		alert("Please enter a valid deadline date.")
	} else {
		//ADD TASK TO TASK LIST
		//ADD MESSAGE "TASK CREATED"
		window.location.href = '../MainPage/index.html' 
	}
}

button.addEventListener('click', addTask)