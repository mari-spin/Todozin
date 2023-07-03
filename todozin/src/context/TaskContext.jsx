import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {

    const [posts, setPosts] = useState([])
    const [newPostTask, setNewPostTask] = useState('');
    const [completedPosts, setCompletedPosts] = useState([]);
    const [showCompleted, setShowCompleted] = useState(true);
    
    const urlTask = "http://localhost:3000/tasks"
    
    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const response = await axios.get(urlTask)
            setPosts(response.data)
            console.log('All Posts:', response.data);

        } catch (error) {
            console.error(error);
        }
    }

    const createPost = async () => {
        if ( newPostTask.trim() === '') {
            alert('Please enter a task name');
            return;
        }
        
        try {
            const currentDate = new Date().toLocaleDateString('en-US', {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric'
            });

            const response = await axios.post(urlTask, {
                name: newPostTask,
                date: currentDate,
                checked:false
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

    useEffect(() => {
        const completed = posts.filter((post) =>post.checked)
        setCompletedPosts(completed)
    }, [posts])

    const toggleShowCompleted = () => {
        setShowCompleted(!showCompleted);
    };

    const undoComplete = async (postId) => {
        try {
            const response = await axios.patch(`${urlTask}/${postId}`, 
                {checked: false}
            )

            const updatedPosts = posts.map((post) => {
                if (post.id === postId) {
                    return response.data
                }
                return post
            })
            
            setPosts(updatedPosts)

        } catch (error) {
            console.error(error)
        }
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
        <TaskContext.Provider
            value={{
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
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

TaskProvider.propTypes = {
    children: PropTypes.node.isRequired
};

