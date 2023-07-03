import axios from "axios";

import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types';

export const DateContext = createContext()

export const DateProvider = ({children}) => {

    const [filteredTasks, setFilteredTasks ] = useState([])
    const [tasks, setTasks] = useState([]);
    
    const urlTask = "http://localhost:3000/tasks"

    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        try {
            const response = await axios.get(urlTask)
            setTasks(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        // Filter tasks for the current date
        const currentDate = new Date().toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric'
        });
    
    const filteredArray = tasks.filter(task => {
        const taskDate = new Date(task.date).toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric'
        });
        return taskDate === currentDate;
        });
    
        setFilteredTasks(filteredArray);
    }, [tasks]);

    return (
        <DateContext.Provider
            value={{
                filteredTasks
            }}
        >
            {children}
        </DateContext.Provider>
    )
}

DateProvider.propTypes = {
    children: PropTypes.node.isRequired
};
