import { AddNewButtonStyle, AddNewInputStyle, TaskWrapperStyle } from "../style";

import { useState } from "react";

import addCircle from "../../../assets/icon/addcircle.svg";

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
        
        <div className="newInput--wrapper">
            <AddNewButtonStyle onClick={handleAddTask}><img src={addCircle} alt="add new task"/></AddNewButtonStyle>
            <AddNewInputStyle
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Enter a new task"
            />
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
