import { Link } from "react-router-dom"
import addIcon from "../../../assets/icon/archiveadd.svg"
import profileIcon from "../../../assets/icon/profilecircle.svg"
import { ListContainer, ListItemStyle, ListStyle } from "../style"

const ListMenuSection = () => {
    return (
        <ul>
            <ListContainer>
                List
                <ListStyle>
                    <ListItemStyle>
                        <Link to="/list/personal">
                            <img src={profileIcon}/>Personal
                        </Link>
                    </ListItemStyle>
                    <ListItemStyle>
                        <Link to="/list/newlist">
                            <img src={addIcon}/>Add New List
                        </Link>
                    </ListItemStyle>
                </ListStyle>
            </ListContainer>
        </ul>
    )
}

export default ListMenuSection
