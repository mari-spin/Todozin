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
            
            console.log('All Tasks:',response.data);
            setPosts(response.data)
            
            console.log('Today Tasks:',response.data);
            setTodayTasks(response.data)
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


            const filteredArray = posts.filter(task => {
                const todayDate = new Date(task.date).toLocaleDateString('en-US', {
                    month: 'numeric',
                    day: 'numeric',
                    year: 'numeric'
                });
                return todayDate === currentDate;
            });
            
            setTodayTasks([...todayTasks, filteredArray])
            
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

