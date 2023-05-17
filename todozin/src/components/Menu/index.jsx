import avocadoCoffee from "../../assets/abacate/avocadoCoffee.svg"
import HeaderMenu from "./Header"
import ListMenuSection from "./ListSection"
import SearchBar from "./SearchBar"
import TaskMenuSection from "./TaskSection"

const Menu = () => {
    return (
        <section>
            <HeaderMenu/>
            <img src={avocadoCoffee}/>
            <SearchBar/>
            <nav>
                <TaskMenuSection/>
                <ListMenuSection/>
            </nav>
        </section>
    )
}

export default Menu
