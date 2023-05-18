import { Link } from "react-router-dom"
import addIcon from "../../../assets/icon/archiveadd.svg"
import profileIcon from "../../../assets/icon/profilecircle.svg"

const ListMenuSection = () => {
    return (
        <ul>
            <li>
                List
                <ul>
                    <li>
                        <Link to="/list/personal">
                            <img src={profileIcon}/>Personal
                        </Link>
                    </li>
                    <li>
                        <Link to="/list/newlist">
                            <img src={addIcon}/>Add New List
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default ListMenuSection
