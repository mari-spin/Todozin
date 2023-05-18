import Menu from "../../components/MenuNavegation"
import TodayTitle from "../../components/Title/TodayTitle"
import TodaySection from "../../components/TodaySection"
import { FlexWrapper } from "../../style/wrapper"

const TodayPage = () => {
    return (
        <FlexWrapper>
            <Menu/>
            <TodayTitle/>
            <TodaySection/>
        </FlexWrapper>
    )
}

export default TodayPage
