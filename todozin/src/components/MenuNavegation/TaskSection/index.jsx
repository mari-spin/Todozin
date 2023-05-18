import { Link } from "react-router-dom"
import allIcon from "../../../assets/icon/all.svg"
import calendarIcon from "../../../assets/icon/calendar.svg"
import todayIcon from "../../../assets/icon/today.svg"

const TaskMenuSection = () => {.0
    return (
        <ul>
            <li>
                Tasks
                <ul>
                    <li>
                        <Link to="/"><img src={todayIcon}/>Today</Link>
                    </li>
                    <li>
                        <Link to="/all"><img src={allIcon}/>All</Link>
                    </li>
                    <li>
                        <Link to="calendar">
                            <img src={calendarIcon}/>Calendar
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default TaskMenuSection
