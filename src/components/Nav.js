 //Styles
 import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
 const Nav=()=>{
 const[showLinks,setShowLinks]=useState(false);
    return(
        <div>
         <NavStyle>
           <ul className={`${showLinks? 'links show-container' :'links' }`}>
               <li>
                <NavLink to="/">Fit<span>4</span>Life</NavLink>
               </li>
               <li>
                <NavLink to="/fit4life-gallery">Gallery</NavLink>
               </li>
               <li>
                <NavLink to="/fit4life-register">Join Now</NavLink>
               </li>
             </ul>
             <div className="menu" onClick={()=>setShowLinks(!showLinks)}>
                <h4>Menu</h4>
             </div>
         </NavStyle>
      
        </div>
    )
 };
 export default Nav;

 const NavStyle=styled.nav`
 .menu{
    width:20.5rem;
    height:5rem;
    background:#b2afaf;
    position:fixed;
    color:black;
    bottom:0;
    cursor:pointer;
    z-index:10;
    left:0rem;
    h4{
        font-family: 'Overpass Mono', monospace;
        font-size:1.5rem;
        text-align: center;
        padding-top:1.5rem;
    }
 }
    
    .links{
        position:fixed;
        bottom:12vh;
        left:0rem;
        background:#b2afaf;
        padding:4rem 7.4rem;
        transform:translateY(190%);
        z-index:99;
    }
    .show-container{
        transform:translateY(0%);
        transition:transform .5s ease-in-out;
    }

    a{
        font-size:1rem;
        text-transform: uppercase;
        letter-spacing: .1rem;
        font-family: 'Overpass Mono', monospace;
        z-index:10;
        color:rgb(27, 26, 25);
        font-weight: bold;
        
        span{
            font-size:clamp(.9rem,2vw,1.1rem);
            font-weight: bold;
        }
    }
   
   @media (max-width:370px){
    .menu{
        width:15rem;
    }
    .links{
        width:15rem;
        padding:2rem 4rem;
       
    }
   }
`;

