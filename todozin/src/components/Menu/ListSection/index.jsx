import addIcon from "../../../assets/icon/archiveadd.svg"
import profileIcon from "../../../assets/icon/profilecircle.svg"

const ListMenuSection = () => {
    return (
        <ul>
            <li>
                List
                <ul>
                    <li><img src={profileIcon}/>Personal</li>
                    <li><img src={addIcon}/>Add New List</li>
                </ul>
            </li>
        </ul>
    )
}

export default ListMenuSection
