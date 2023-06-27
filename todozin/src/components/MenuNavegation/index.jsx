import avocadoCoffee from "../../assets/abacate/avocadoCoffee.svg"

import HeaderMenu from "./Header"
import SearchBar from "./SearchBar"
import TaskMenuSection from "./TaskSection"

import { MenuSectionStyle } from "./style"

const Menu = () => {
    return (
        <MenuSectionStyle>
            <HeaderMenu/>
            <img src={avocadoCoffee} className="avocado-img"/>
            <SearchBar/>
            <nav>
                <TaskMenuSection/>
            </nav>
        </MenuSectionStyle>
    )
}

export default Menu
