
import workout from '../img/workout.jpg';
import styled from "styled-components";
import {useScrollAnimation} from '../useScrollAnimation';
import { fade,container } from '../animation';
import {motion} from 'framer-motion'
const SecondPage=()=>{
    const[element,controls]=useScrollAnimation();
    return(
        <Wrapper ref={element} animate={controls} variants={container}>
        <div className="workout-desc">
        <motion.div className="anim" variants={fade}>
        <h3>6 Week Workout Program</h3>
        <p>Want to start your fitness yourney? <br/> This is the perfect plan to get you started.<br/>What's included?</p>
        <h4>Training Plan</h4>
        <p>Bodyweight workouts that are designed for all fitness levels. <br/> 6 training plans to get fit. <br/>The program will help you achieve improved levels of fitness and wellness. <br/> Weights are optional.</p>
        <h4>Nutrition Plan</h4>
        <p>You'll learn about macros and micronutrient which are essential nutrients the body needs in large quantities to remain healthy.</p>
        </motion.div>
        </div>
        </Wrapper>
    )
};
export default SecondPage;
const Wrapper=styled(motion.div)`
    margin:0rem auto;
    width:100%;
    background-image:URL(${workout});
    background-position:top;
    background-repeat: no-repeat;
    background-size: 100%;
    font-family: 'Poppins',sans-serif;
    position:relative;
  
    h3{
        font-size:clamp(.9rem,2vw,1.5rem);
        margin-bottom:2rem;
    }
    h4{
        font-size:clamp(1rem,2vw,1.2rem);
    }
    p{
        font-size:clamp(.8rem,2vw,1rem);
        margin-bottom:2rem;
       
    }
    .workout-desc{
        width:40rem;
        background:#0b0b0b99;
        padding:6rem 2rem;
       
        max-width:360px;
        margin:0 auto;
    
    }

`