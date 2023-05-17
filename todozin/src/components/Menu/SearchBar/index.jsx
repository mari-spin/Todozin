import { useState } from "react";
import searchIcon from "../../../assets/icon/searchIcon.svg";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button type="submit"><img src={searchIcon} alt="Search"/></button>
        </form>
    )
}

export default SearchBar
