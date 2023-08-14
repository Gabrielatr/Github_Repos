import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #22272e;
        color: white;
        font-family: Arial;
    }
    ::-webkit-scrollbar {
        width: 15px;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: black; 
        border-radius: 10px;
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #FAFAFA; 
      }
`