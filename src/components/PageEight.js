//Styles
import styled from "styled-components"
//Components
import Toggle from "./Toggle";
import {AnimateSharedLayout} from 'framer-motion';
import {useScrollAnimation} from '../useScrollAnimation';
import { container } from '../animation';
import {motion} from 'framer-motion'


const PageEight=()=>{
    const[element,controls]=useScrollAnimation();
    return(
        <Wrapper ref={element} animate={controls} variants={container}>
         <h2>Any Questions <span>FAQ</span></h2>
         <AnimateSharedLayout>
         <Toggle title="Can I join as a beginner?">
         <div className="question">
        <div className="answer">
                <p>Absolutely. This program is designed for all fitness levels.</p>
                <p>I give instructions in my programs and lives with modified workout exercises.</p>
            </div>
        </div>
         </Toggle>
         <Toggle title='Can I cancel my membership at anytime?'>
         <div className="question">
           <div className="answer">
                <p>Yes. You can cancel your membership anytime but you will lose access to all benefits.</p>
            </div>
         </div>
         </Toggle>
         <Toggle title='Can I join from anywhere in the world?'>
         <div className="question">
         <div className="answer">
                <p>100%! You can join from anywhere in the world. </p>
                <p>Our program is accessible everywhere.</p>
            </div>
        </div>
         </Toggle>
         <Toggle title='How can I interact with you?'>
         <div className="question">
         <div className="answer">
            <p>There are several ways: on Facebook group, direct text messages on my social media platforms, or on email.</p>
            </div>
         </div>
         </Toggle>
         <Toggle title='Are live classes saved on the website?'>
         <div className="question">
         <div className="answer">
            <p>Yes. All live classes are saved on the private Facebook community page.</p>
         </div>
         </div>
         </Toggle>
         </AnimateSharedLayout>
        </Wrapper>
    )
}
export default PageEight;

const Wrapper=styled(motion.div)`
    display:block;
    font-family: "Poppins",sans-serif;
    margin:0 auto;
    width:100%;
    padding:0rem 2rem;
    margin:1rem 0rem;
        h2{
        font-family: 'Overpass Mono', monospace;
        font-size:clamp(1.2rem,2vw,1.8rem);
        text-align: center;
        margin-bottom:4rem;
        span{
            color:rgb(172, 117, 44);
            font-weight: bold;
            font-size:clamp(1.4rem,3vw,2rem);
        }
    }
        .question{
         margin:2.5rem 0rem;
        .line{
         background:#cccccc;
         height:0.2rem;
         margin:2rem 0rem;
         width:100%;
         
  }
        h3{
        font-family: 'Overpass Mono', monospace;
        font-size:clamp(1rem,2vw,1.1rem);
        cursor:pointer;
    }
        .answer{
        max-width:700px;
       
        p{
        font-size:clamp(.8rem,2vw,.9rem);
        margin-top:1rem;
    }
    }
    }
`