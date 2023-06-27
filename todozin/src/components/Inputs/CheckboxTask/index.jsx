import { AddNewButtonStyle, AddNewInputStyle, TaskWrapperStyle } from "../style";

import addCircle from "../../../assets/icon/addcircle.svg";

import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContext";

const CheckboxTask = () => {
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
    
    return (
    <TaskWrapperStyle borderRadius={"0 10px 10px 10px"}>
        
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
            {posts.map((post) => (
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
            ))}
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

export default CheckboxTask
