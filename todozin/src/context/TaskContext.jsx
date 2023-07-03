import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {

    const [posts, setPosts] = useState([])
    const [todayTasks, setTodayTasks ] = useState([])

    const [newPostTask, setNewPostTask] = useState(''); //valor do input

    const [completedPosts, setCompletedPosts] = useState([]);
    const [showCompleted, setShowCompleted] = useState(true);
    
    const urlTask = "http://localhost:3000/tasks"
    
    useEffect(() => {
        fetchPosts()
    }, [])

    useEffect(() => {
        console.log("All Posts:", posts)
        console.log("Today:", todayTasks)
    }, [posts, todayTasks])

    const fetchPosts = async () => {
        try {
            const response = await axios.get(urlTask)
            
            const currentDate = new Date().toLocaleDateString('en-US', {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric'
            });

            const allTasks = response.data
            setPosts(allTasks)
            
            const todayTasks = allTasks.filter((task) => {
                const todayDate = new Date(task.date).toLocaleDateString('en-US', {
                    month: 'numeric',
                    day: 'numeric',
                    year: 'numeric',
                });
                return todayDate === currentDate;
            });

            setTodayTasks(todayTasks);
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
            
            // Update the posts state with the newly created task
            setPosts([...posts, response.data]);
            setNewPostTask('')


             // Check if the newly created task is for today and add it to todayTasks state
            const todayDate = new Date(response.data.date).toLocaleDateString('en-US', {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric',
            });
            
            if (todayDate === currentDate) {
                setTodayTasks([...todayTasks, response.data]);
            }
            
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
        setTodayTasks(updatedPosts)
    }

    useEffect(() => {
        const completed = posts.filter((post) => post.checked, todayTasks.checked)

        setCompletedPosts(completed)
    }, [posts, todayTasks])

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

            const updatedTodayPosts = todayTasks.map((post) => {
                if (post.id === postId) {
                    return response.data
                }
                return post
            })
            
            setTodayTasks(updatedTodayPosts)

        } catch (error) {
            console.error(error)
        }
    }
    
    const deletePost = async (postId) => {
        try {
            await axios.delete(`${urlTask}/${postId}`);
            const updatedPosts = posts.filter((post) => post.id !== postId);
            setPosts(updatedPosts);
            setTodayTasks(updatedPosts);
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
                todayTasks,
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

