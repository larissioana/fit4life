//Styles
import styled from "styled-components";
//data
import { icons } from "../data";
import { useScrollAnimation } from "../useScrollAnimation";
import { fade } from "../animation";
import {motion} from 'framer-motion'
const FirstPage=()=>{
  //Animation
  const[element,controls]=useScrollAnimation();
    return(
        <FirstSection ref={element} animate={controls}>
        <div  className="hero-desc">
          <h3><strong>Fit4Life</strong></h3>
            <p>It's not just a program. <b/> A better way to live.<b/></p>
            <p>A healthy mind is key for a healthy body. Fit4Life focuses on creating a stronger mindset. <br/>It will better your relationships with training and with yourself.</p>
           
        </div>
        <Description>
            {icons.map(icon=>{
                const{id,img,text,text2}=icon;
                return <motion.div variants={fade} className="mindset-desc" key={id}>
                    <motion.img  src={img} alt={text2}/>
                    <p>{text}</p>
                    <span>{text2}</span>
                </motion.div>
            })}
        </Description>
        </FirstSection>
    )
};
export default FirstPage;

const FirstSection=styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Poppins",sans-serif;
  
  
  h3{
    text-align:center;
    font-size:clamp(1.2rem,2vw,3.5rem);
    text-transform: uppercase;
    letter-spacing: .2rem;
    margin-bottom:2rem;
  }
  p{
    text-align: center;
    font-size:clamp(.8rem,2vw,1.1rem);
    letter-spacing: .1rem;
    line-height: 2.9rem;
  }
  b{
    font-size:clamp(.9rem,2vw,1.4rem);
  }
   
   
`;
const Description=styled.div`
  background: linear-gradient(to right, #d5d0d0, #ddd5d5);
    min-height: 60vh;
    width: 100%;
    margin: 3rem auto 0rem auto;
    color:black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .mindset-desc{
        padding:2rem 5rem;
        img{
        max-width:20rem;
        height:20vh;
        object-fit: cover;
    }
    p{
        text-transform: uppercase;
        font-size: clamp(1rem, 2vw, 1.2rem);
        letter-spacing: 0.3rem;
      
    }
    span{
        font-size: clamp(1.4rem, 2vw, 2rem);
        color: rgb(172, 117, 44);
    }
    }
    
   
`