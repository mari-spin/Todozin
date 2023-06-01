import { styled } from "styled-components";

export const MenuSectionStyle = styled.section`
    background-color: var(--green-light);

    min-height: 90vh;
    min-width: fit-content;

    overflow: auto;

    padding: 1rem;

    border-radius: 15px;

    display: flex;
    justify-content: space-around;
    align-items: left;
    flex-direction:column;
    gap: 2rem;

    .avocado-img{
        width: 150px;
        margin: 0 auto;
    }
`

export const ListContainer = styled.li`
    margin-bottom: 2rem;
    
`


export const ListStyle = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1vh;


`

export const ListItemStyle = styled.li`
    & > a {
        display: flex;
        flex-direction: row;
        gap: 1vw;

        transition: ease-in-out 200ms;
    }

    & > a:hover {
        gap: 2vw;
    }
` 

