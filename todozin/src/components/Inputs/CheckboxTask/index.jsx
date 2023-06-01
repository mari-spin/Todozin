import { AddNewButtonStyle, AddNewInputStyle, TaskWrapperStyle } from "../style";

import { useEffect, useState } from "react";

import axios from "axios";
import addCircle from "../../../assets/icon/addcircle.svg";

const CheckboxTask = () => {
    const [posts, setPosts] = useState([])
    const [newPostTask, setNewPostTask] = useState('');
    
    const urlTask = "http://localhost:3000/task"
    
    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const response = await axios.get(urlTask)
            setPosts(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    const createPost = async () => {
        try {
            const currentDate = new Date().toLocaleDateString('en-US', {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric'
            });

            const response = await axios.post(urlTask, {
                name: newPostTask,
                date: currentDate,
                description: null
            })
            setPosts([...posts, response.data])
            setNewPostTask('')
        } catch (error) {
            console.error(error)
        }
    }

    const handleCheckboxChange = (postsId) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === postsId) {
                return {
                    ...post,
                    checked: !post.checked
                }
            }
            return post
        })
        setPosts(updatedPosts)
    }

    const deletePost = async (postId) => {
        try {
            await axios.delete(`${urlTask}/${postId}`);
            const updatedPosts = posts.filter((post) => post.id !== postId);
            setPosts(updatedPosts);
        } 
        catch (error) {
            console.error(error);
        }
    };
    

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
        
        <ul>
            {posts.map((post) => (
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
    </TaskWrapperStyle>
    )
}

export default CheckboxTask
