/* eslint-disable no-undef */
import { AddNewButtonStyle, AddNewInputStyle, TaskWrapperStyle } from "../style";

import PropTypes from 'prop-types';

import addCircle from "../../../assets/icon/addcircle.svg";

import { useContext } from "react";
import { DateContext } from "../../../context/DateContext";
import { TaskContext } from "../../../context/TaskContext";

const CheckboxTask = ({allTasks, filterDate}) => {

    const {
        posts,
        newPostTask,
        completedPosts,
        showCompleted,
        setNewPostTask,
        createPost,
        handleCheckboxChange,
        toggleShowCompleted,
        undoComplete,
        deletePost
    } = useContext(TaskContext)
    
    const { filteredTasks } = useContext(DateContext)
    
    return (
    <TaskWrapperStyle radius={"0 10px 10px 10px"}>
        
        <div className="newInput--wrapper">
            <AddNewButtonStyle onClick={createPost}><img src={addCircle} alt="add new task"/></AddNewButtonStyle>
            <AddNewInputStyle
                type="text"
                value={newPostTask}
                onChange={(e) => setNewPostTask(e.target.value)}
                placeholder="Enter a new task"
                />
        </div>
        
        <h3>Active Tasks</h3>
        
        <ul>
            {
                filterDate &&
                    filteredTasks.map((post) => (
                        post.checked == false &&
                        <li key={post.id}>
                            <input
                            type="checkbox"
                            checked={post.checked || false}
                            onChange={() => handleCheckboxChange(post.id)}
                            />
                                {post.name} - {post.date}
                            <button onClick={() => deletePost(post.id)}>Delete</button>
                        </li>
                        ))
            }
            {
                allTasks &&   
                    posts.map((post) => (
                        post.checked == false &&
                        <li key={post.id}>
                            <input
                            type="checkbox"
                            checked={post.checked || false}
                            onChange={() => handleCheckboxChange(post.id)}
                            />
                                {post.name} - {post.date}
                            <button onClick={() => deletePost(post.id)}>Delete</button>
                        </li>
                        ))
            }
        </ul>

        <div>
            <input
            type="checkbox"
            checked={showCompleted}
            onChange={toggleShowCompleted}
            />
            <label htmlFor="showCompleted">Show Completed Tasks</label>
        </div>
            {showCompleted && (
                <>
                    <h3>Concluded Tasks</h3>
                    <ul>
                        {completedPosts.map((post) => (
                            <li key={post.id}>
                            {post.name} - {post.date}
                            <button onClick={() => undoComplete(post.id)}>Undo</button>
                        </li>
                        ))}
                    </ul>
                </>
            )}
        </TaskWrapperStyle>
    )
}

CheckboxTask.propTypes = {
    filterDate: PropTypes.bool,
    allTasks: PropTypes.bool,
};

export default CheckboxTask
