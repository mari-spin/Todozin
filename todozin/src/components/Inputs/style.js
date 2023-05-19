import { styled } from "styled-components";

export const TaskWrapperStyle = styled.div`
    background-color: var(--beige);

    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "15px")};
    
    padding: 1vh 3vw;
    height: 420px;
    overflow: auto;
`

export const AddNewInputStyle = styled.input`

`

export const AddNewButtonStyle = styled.button`
`
