import { useState } from "react";
import '../styles/main.scss';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleAddTask(){
        if (newTask.trim() !== ''){
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    }

    function handleDeleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function handleMoveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);  
        }
    }

    function handleMoveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        }

    return (
        <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="input-section">
        <input 
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Enter a new task'
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <div className="button-group">
            <button className="move-button" onClick={() => handleMoveUp(index)}>Move Up</button>
            <button className="move-button" onClick={() => handleMoveDown(index)}>Move Down</button>
            <button className="remove-button" onClick={() => handleDeleteTask(index)}>Remove Task</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
  