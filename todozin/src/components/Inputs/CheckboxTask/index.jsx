import { useState } from "react";
import { AddNewButtonStyle, AddNewInputStyle, TaskWrapperStyle } from "../style";

const CheckboxTask = () => {

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
    <TaskWrapperStyle borderRadius={"0 10px 10px 10px"}>
        <div>
            <AddNewInputStyle
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Enter a new task"
            />
            <AddNewButtonStyle onClick={handleAddTask}>Add Task</AddNewButtonStyle>
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
    </TaskWrapperStyle>
    )
}

export default CheckboxTask
