import { styled } from "styled-components";

export const FormStyle = styled.form`
    display: flex;

`

export const ButtonStyle = styled.button`
    background-color: var(--white);

    border: 0 none;
    border-radius: 0 10px 10px 0;



`

export const SeachBarStyle = styled.input`
    background-color: var(--white);

    border: 0 none;
    border-radius: 10px 0px 0 10px;

    padding: 0.5rem;
    font-size: 1rem;
    color: var(--gray);
    
    ::placeholder {
        color: var(--green-light);
    }


`
