import { useContext, useState } from 'react';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { TaskContext } from "../../context/TaskContext";

const CalendarSection = () => {
    const { posts } = useContext(TaskContext)

    const [calendarDate, setCalendarDate] = useState(new Date())


    console.log(calendarDate);
    return (
        <>
            <Calendar
                value={calendarDate}
                onChange={setCalendarDate} 
            />
        </>
    )
}

export default CalendarSection
