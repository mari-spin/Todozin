import { useState } from "react";
import { AddNewButtonStyle, AddNewInputStyle, TaskWrapperStyle } from "../style";

import addCircle from "../../../assets/icon/addcircle.svg";


const CheckboxList = () => {

    const [lists, setLists] = useState([]);
    const [newList, setNewList] = useState('');
    
    const handleInputChange = (event) => {
        setNewList(event.target.value);
    };

    const handleAddList = () => {
        if (newList.trim() !== '') {
            setLists([...lists, newList]);
            setNewList('');
        }
    };


    const handleListCompletion = (index) => {
        const updatedTasks = [...lists];
        updatedTasks[index] = <del>{updatedTasks[index]}</del>;
        setLists(updatedTasks);
    };
    
    const handleDeleteList = (index) => {
        const updatedTasks = [...lists];
        updatedTasks.splice(index, 1);
        setLists(updatedTasks);
    };

    return (
    <TaskWrapperStyle>
        <div className="newInput--wrapper">
            <AddNewButtonStyle onClick={handleAddList}><img src={addCircle }/></AddNewButtonStyle>
            <AddNewInputStyle
            type="text"
            value={newList}
            onChange={handleInputChange}
            placeholder="Create a new list"
            />
        </div>
        
        <ul>
            {lists.map((list, index) => (
            <li key={index}>
                <input
                type="checkbox"
                onChange={() => handleListCompletion(index)}
                />

                {list}
                
                <button onClick={() => handleDeleteList(index)}>Delete</button>
            </li>
            ))}
        </ul>
    </TaskWrapperStyle>
    )
}

export default CheckboxList
