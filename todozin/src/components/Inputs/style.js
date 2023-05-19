import { styled } from "styled-components";

export const TaskWrapperStyle = styled.div`
    background-color: var(--beige);

    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "15px")};
    
    padding: 2vh 3vw;
    min-height: 70vh;
    overflow: auto;

    .newInput--wrapper{
        width: 100%;

        position: relative;
        display: inline-block;
    }
`

export const AddNewInputStyle = styled.input`
    width: 100%;
    padding: 2vh 3vw;
    
    border: 3px solid var(--green-light);
    border-radius: 15px;

    
    background-color: transparent;

`

export const AddNewButtonStyle = styled.button`
    background-color: transparent;
    border: 0 none;

    position: absolute;
    top: 10px;
    left: 0;
`
