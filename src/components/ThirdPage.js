
//Styles
import styled from "styled-components";
//Data
import { imageGallery } from "../data";
import {useScrollAnimation} from '../useScrollAnimation';
import {container } from '../animation';
import {motion} from 'framer-motion'
import { AnimateSharedLayout } from "framer-motion";

const ThirdPage=()=>{
    const[element,controls]=useScrollAnimation();
    return(
        <Wrapper ref={element} animate={controls} variants={container}>
            <h1>Nutrition & Training</h1>
            <h3>No gym needed, just your effort.</h3>
            <AnimateSharedLayout>
            <motion.div className="media-scroller snaps-inline">
            {imageGallery.map(image=>{
                    const {img,imageHover,text,id}=image;
                    return <motion.div  className="media-element" key={id}>
                        <motion.img src={img} alt={text}/>
                        <img  className="transition" src={imageHover} alt="exercises"/>
                        <h5>{text}</h5>
                    </motion.div>
                })}
              
            </motion.div>
            </AnimateSharedLayout>
        
 
        </Wrapper>
    )
};
export default ThirdPage;

const Wrapper=styled(motion.div)`
  padding:5rem 2rem 5rem 2rem;
   display: grid;
   color:white;
   font-family: "Poppins",sans-serif;
   h1{
   
    text-align: center;
    letter-spacing: 0.2rem;
    font-size: clamp(1rem, 2vw, 1.5rem);
   }
   h3{
    text-align: center;
    letter-spacing: 0.2rem;
    font-size: clamp(.8rem, 2vw, 1rem);
    padding-top: 1rem;
    margin-bottom:3rem;
   }
    .media-scroller{
        display: grid;
        gap: 8rem;
        grid-auto-flow: column;
        grid-auto-columns: 15rem;
        overflow-x: auto;
        scroll-behavior: smooth;
        overscroll-behavior-inline: contain;
        scrollbar-color: rgb(116, 114, 114) rgb(159, 160, 159);
        position:relative;
       
    } 
  
        
        .media-element{
        position:relative;
       
       
       
        img{
            width:20rem;
            height:25rem;
            object-fit: cover;
            object-position: center;
            border-radius:.6rem;
            
            
         }
        }
        .transition{
            position:absolute;
            top: 0;
            left: 0;
           
            opacity:0;
            transition: opacity .5s ease-in;
          
        }
        .transition:hover {
            opacity: 1;
           
            
            }
        h5{
            margin-bottom:3rem;
            margin-top:2rem;
            letter-spacing:.1rem;
            font-size:clamp(.9rem,2vw,1rem);
        }
    
`