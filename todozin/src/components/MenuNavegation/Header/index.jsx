import menuIcon from "../../../assets/icon/menuIcon.svg"
import { HeaderStyle } from "./style"

const HeaderMenu = () => {
    return (
        <HeaderStyle>
            <h2>Menu</h2>
            <img src={menuIcon} alt="Menu"/>
        </HeaderStyle>
    )
}

export default HeaderMenu
