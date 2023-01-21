//Styles
import styled from "styled-components";
//Data
import { videos } from "../data";
import {useScrollAnimation} from '../useScrollAnimation';
import { fade,container } from '../animation';
import {motion} from 'framer-motion'

const FifthPage=()=>{
    const[element,controls]=useScrollAnimation();
    return(
        <Wrapper ref={element} animate={controls} variants={container}>
         <h1>Easy-To-Follow-Videos</h1>
         <div className="training-videos">
            {videos.map(video=>{
                const{trainingVideo,title,id}=video;
                return <motion.div variants={fade} key={id} className="home-workout">
                    <video src={trainingVideo} loop autoPlay muted playsInline/>
                    <h4>{title}</h4>
                    </motion.div>
            })}
         </div>
        </Wrapper>
    )
};

export default FifthPage;

const Wrapper=styled(motion.div)`
    margin:6rem auto;
    font-family: "Poppins",sans-serif;
  
    h1{
        font-size:clamp(1rem,2vw,1.9rem);
        letter-spacing: .2rem;
        text-align: center;
    }
    .training-videos{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap:3rem;
        margin:5rem auto;
        padding:0rem 2rem;
        video{
            width:25rem;
            min-height:35vh;
        }
        h4{
            margin-top:.8rem;
            font-size:clamp(.9rem,2vw,1rem);
            border-bottom:3px solid #787777;
            padding-bottom:.8rem;
            text-align: center;
        }
        @media (max-width:418px){
           video{
            width:18rem;
           }
        }
    }
`