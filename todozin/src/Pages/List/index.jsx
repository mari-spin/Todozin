import CheckboxList from "../../components/Inputs/CheckboxList"
import Menu from "../../components/MenuNavegation"
import ListTitle from "../../components/Title/ListTitle"

import { FlexWrapper } from "../../style/wrapper"

const ListPage = () => {
    return (
        <FlexWrapper>
            <Menu/>
            <ListTitle/>
            <CheckboxList/>
        </FlexWrapper>
    )
}

export default ListPage
