import allIcon from "../../../assets/icon/all.svg"
import calendarIcon from "../../../assets/icon/calendar.svg"
import todayIcon from "../../../assets/icon/today.svg"

const TaskMenuSection = () => {
    return (
        <ul>
            <li>
                Tasks
                <ul>
                    <li><img src={todayIcon}/>Today</li>
                    <li><img src={allIcon}/>All</li>
                    <li><img src={calendarIcon}/>Calendar</li>
                </ul>
            </li>
        </ul>
    )
}

export default TaskMenuSection
