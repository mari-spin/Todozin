import { useState } from "react";

const ListCheckbox = () => {

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
    <div>
        <div>
            <input
            type="text"
            value={newList}
            onChange={handleInputChange}
            placeholder="Create a new list"
            />
            <button onClick={handleAddList}>Add List</button>
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
    </div>
    )
}

export default ListCheckbox
