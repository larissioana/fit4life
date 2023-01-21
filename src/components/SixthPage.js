//Styles
import styled from "styled-components";
//data
import { stories } from "../data";
import {useState} from 'react';
import {IoArrowForwardCircle} from 'react-icons/io5'

const SixthPage=()=>{
    const[index,setIndex]=useState(0);
    const{name,img,text}=stories[index];


    const checkNumber=(number)=>{
        if(number>stories.length-1){
            return 0;
        }  return number;
    }
    const nextPerson=()=>{
        setIndex((index)=>{
            let newPerson=index+1;
            return checkNumber(newPerson);
        })
    }
    return(
        <Wrapper>
        <h2>Success Stories</h2>
        <div className="story-desc">
        <img src={img} alt={name}/>
        <h4>@ {name}</h4>
        <p>{text}</p>
        <IoArrowForwardCircle id="next" onClick={nextPerson}/>
         </div>
        </Wrapper>
    )
};
export default SixthPage;

const Wrapper=styled.div`
    margin:0rem auto 2rem auto;
    font-family: "Poppins",sans-serif;
    width:100%;
    justify-content: center;
    display:flex;
    padding:4rem 2rem;
  h2{
    text-align: center;
    font-family: 'Overpass Mono', monospace;
    font-size:clamp(1.2rem,2vw,1.8rem);
  }
    img{
        border-radius:50%;
        object-fit: cover;
        height:20rem;
        clip-path: circle();
    }
    .story-desc{
     display:block;
        
        p{
            max-width:400px;
            font-size:clamp(.8rem,2vw,.9rem);
        }
        h4{
            font-size:clamp(1rem,2vw,1.1rem);
            font-family: 'Overpass Mono', monospace;
            margin-bottom:1.5rem;
        }
        }
        #next{
          color:#d8d3d1;
          font-size:clamp(2rem,3vw,4rem);
          cursor:pointer;
          margin-top:1rem;
          
         }
       
 
       
    
   
  
    @media screen and (max-width:500px){
        .story-desc{
           display:block;
            
        }
    }
`