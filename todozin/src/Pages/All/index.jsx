import ContentSection from "../../components/ContentSection"
import Menu from "../../components/MenuNavegation"
import Title from "../../components/Title"

import { FlexWrapper } from "../../style/wrapper"

const All = () => {
    return (
        <FlexWrapper>
            <Menu/>

            <ContentSection allTasks>
                <Title/>
                
                All 
            </ContentSection>
        </FlexWrapper>
    )
}

export default All
