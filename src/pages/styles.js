import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    box-sizing: border-box;
    padding-top: 20px;
    display: flex;
    //flex-direction: column;
    //align-items: center;
    //justify-content: flex-start;
`

export const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const SearchContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
export const ListContainer = styled.div`
    width: 50%;
    height: 100%;
    //visibility: hidden;
    padding-top: 30px;
    box-sizing: border-box;


    ul{
        list-style: none;

        li{
            display: inline-block;
            padding: 5px;
        }
    }
`