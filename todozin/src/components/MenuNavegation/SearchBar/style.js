import { styled } from "styled-components";

export const SeachBarStyle = styled.input`
    background-color: var(--white);

    border: 1px solid #ccc;
    border-radius: 10px;

    padding: 0.5rem;
    font-size: 1rem;
    color: var(--gray);
    
    ::placeholder {
        color: var(--green-light);
    }
`
