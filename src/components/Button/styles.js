import { styled } from "styled-components";

export const ButtonContainer = styled.button`
    background-color: white;
    border-radius: 20px;
    color: black;
    cursor: pointer;
    
    height: 35px;
    min-width: 100px;
    padding: 5px 10px;

    &: hover{
        background-color: purple;
    }
`