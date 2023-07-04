
import "react-big-calendar/lib/css/react-big-calendar.css";

import Menu from '../../components/MenuNavegation/index';


import CalendarSection from "../../components/Calendar";
import { FlexWrapper } from "../../style/wrapper";
import { CalendarWrapper } from "./style";

const CalendarPage = () => {

    return (
        <FlexWrapper>
            <Menu/>
            <div>
                <h1>Calendar</h1>
                <CalendarWrapper>
                    <CalendarSection/>
                </CalendarWrapper>
            </div>
        </FlexWrapper>
    )
}

export default CalendarPage
