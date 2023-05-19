import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`

    :root{
        --white: #f2f2f2;
        --gray: #515249;
        --beige: #D9CE96;

        --green: #5A7302;
        --green-light: #A0A603;
        --green-dark: #2C4001;
    }

    button {
        cursor: pointer;
    }

    a {
        color: var(--white);
        text-decoration: none;
    }

    h1,
    h2,
    h3 {
        font-family: Bebas Neue;
        
        text-transform: uppercase;
    }

    p, 
    li {
        font-family: Urbanist;
        font-weight: bold;

        text-transform: uppercase;
    }
`

export default GlobalStyle
