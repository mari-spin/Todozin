import { useState } from "react";
import searchIcon from "../../../assets/icon/searchIcon.svg";
import { ButtonStyle, FormStyle, SeachBarStyle } from "./style";

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
        <FormStyle onSubmit={handleFormSubmit}>
            <SeachBarStyle 
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <ButtonStyle type="submit">
                <img src={searchIcon} alt="Search"/>
            </ButtonStyle>
        </FormStyle>
    )
}

export default SearchBar
