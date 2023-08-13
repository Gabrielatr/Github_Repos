import { styled } from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid white;
    border-radius: 20px;

    margin: 20px;
    height: 50px;
    width: 30%;
    align-items: center;
    justify-content: center;

    input {
        background: transparent;
        color: white;
        font-size: 20px;

        border-radius: 20px;

        width: 90%;
        height: 50px;
        padding: 0 20px;
    }
`

export const IContainer = styled.input`
    background: transparent;
    color: white;
    font-size: 20px;

    border-radius: 20px;

    height: 50px;
    margin: 10px;
    padding: 0 20px;
    width: 30%;
    min-width: 250px;
    align-items: center;
    justify-content: center;
`