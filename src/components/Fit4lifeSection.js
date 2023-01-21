//Styled
import styled from "styled-components";
import {motion} from 'framer-motion';
import { titleAnim,titleAnim1 } from "../animation";


const Fit4LifeSection=()=>{
    return(
        <div>
        <Title className="title">
            <motion.h1 variants={titleAnim} initial='hidden' animate='show' className="title1">Join Us</motion.h1>
            <motion.h1 variants={titleAnim1} initial='hidden' animate='show' className="title2">It's a lifestyle.</motion.h1>
        </Title>
    
        </div>
    )
};


export default Fit4LifeSection;

const Title=styled(motion.div)`
    position:absolute;
    top:15%;
    left:6%;
    .title1{
        font-size:clamp(1.3rem,3vw,3rem);
        font-family: 'Overpass Mono', monospace;
        margin-bottom:.8rem;
        color:white;
    }
    .title2{
        font-size:clamp(.9rem,2vw,2rem);
        font-family: 'Overpass Mono', monospace;
        color:white;
    }
  
`