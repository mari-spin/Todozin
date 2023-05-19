import Menu from "../../components/MenuNavegation"
import TodayTitle from "../../components/Title/TodayTitle"
import TodaySection from "../../components/TodaySection"
import { FlexWrapper } from "../../style/wrapper"
import { TodayPageWrapper } from "./style"

const TodayPage = () => {
    return (
        <FlexWrapper>
            <Menu/>
            
            <TodayPageWrapper>
                <TodayTitle/>
                <TodaySection/>
            </TodayPageWrapper>
        </FlexWrapper>
    )
}

export default TodayPage
