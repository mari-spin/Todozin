import { Link } from "react-router-dom"

import allIcon from "../../../assets/icon/all.svg"
import calendarIcon from "../../../assets/icon/calendar.svg"
import todayIcon from "../../../assets/icon/today.svg"

import { ListContainer, ListItemStyle, ListStyle } from "../style"

const TaskMenuSection = () => {
    return (
        <ul>
            <ListContainer>
                Tasks
                <ListStyle>
                    <ListItemStyle>
                        <Link to="/"><img src={allIcon}/>All</Link>
                    </ListItemStyle>
                    <ListItemStyle>
                        <Link to="today"><img src={todayIcon}/>Today</Link>
                    </ListItemStyle>
                    <ListItemStyle>
                        <Link to="calendar">
                            <img src={calendarIcon}/>Calendar
                        </Link>
                    </ListItemStyle>
                </ListStyle>
            </ListContainer>
        </ul>
    )
}

export default TaskMenuSection
