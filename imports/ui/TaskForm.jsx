import React, { useState } from 'react';

const TaskForm = () => {
	const [text, setText] = useState("");

	return (
		<form className="task-form">
			<input
				type="text"
				placeholder="add Task"
			/>
			<button type="submit">Add Task</button>
		</form>
	);
}

export default TaskForm;