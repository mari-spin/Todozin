import { useState } from "react";

const TaskList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    
    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };


    const handleTaskCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = <del>{updatedTasks[index]}</del>;
        setTasks(updatedTasks);
    };
    
    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
    <div>
        <div>
            <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
        
        <ul>
            {tasks.map((task, index) => (
            <li key={index}>
                <input
                type="checkbox"
                onChange={() => handleTaskCompletion(index)}
                />

                {task}
                
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
            ))}
        </ul>
    </div>
    )
}

export default TaskList
