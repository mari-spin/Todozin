import ContentSection from "../../components/ContentSection"
import Menu from "../../components/MenuNavegation"
import TodayTitle from "../../components/Title"

import { FlexWrapper } from "../../style/wrapper"
import { TodayPageWrapper } from "./style"

const TodayPage = () => {
    return (
        <FlexWrapper>
            <Menu/>
            
            <TodayPageWrapper>
                <TodayTitle>
                    Todo zin
                </TodayTitle>
                
                <ContentSection filterDate>
                    Today
                </ContentSection>

            </TodayPageWrapper>
        </FlexWrapper>
    )
}

export default TodayPage
