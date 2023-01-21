import {createGlobalStyle} from 'styled-components'

export const GlobalStyle=createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
      
    }
    body{
        background: #2b2727;
        color:white;
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
        color:white;
    }
    li{
        list-style: none;
    }
    li a::after {
        content: '';
        width: 0;
        margin: 0.5rem 0rem;
        display: block;
        height: 1.5px;
        background-color: rgb(24, 24, 25);
        transition: width .4s ease-in;
    }
            
    li a:hover::after {
        width: 100%;
     }
`