import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding-top: 20px;
    display: flex;
    position: absolute;
`

export const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

export const SearchContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
export const ListContainer = styled.div`
    height: 100%;
    padding-top: 30px;

    ul{
        list-style: none;

        li{
            display: inline-block;
            padding: 5px;
        }
    }
`