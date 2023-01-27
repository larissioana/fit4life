//Styles
import styled from "styled-components";
//Data
import { membership } from "../data";
import {useScrollAnimation} from '../useScrollAnimation';
import { fade,container } from '../animation';
import {motion} from 'framer-motion'


const FourthPage=()=>{
    const[element,controls]=useScrollAnimation();
    return(
        <Wrapper ref={element} animate={controls} variants={container}>
            <h1>Membership Perks</h1>
          <div className="flex-container">
            {membership.map(item=>{
                const{id,title,img,text}=item;
                return <motion.div variants={fade} key={id} className="membership-desc">
                   <img src={img} alt={title}/>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    </motion.div>
            })}
          </div>
        </Wrapper>
    )
};
export default FourthPage;

const Wrapper=styled(motion.div)`
    margin:4rem auto;
   
    font-family: "Poppins",sans-serif;
    h1{
        text-align: center;
        font-size: clamp(1.1rem, 2vw, 2rem);
        margin-bottom: 3rem;
        letter-spacing: 0.3rem;
    }
    p{
        margin-top:.8rem;
        font-size: clamp(.7rem, 2vw, .9rem);
        max-width:300px;
    }
    h3{
        margin-top:.8rem;
        font-size: clamp(.9rem, 2vw, 1rem);
    }
    .flex-container {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
     margin: 3rem auto;
     place-items: center;
     
    }
    .membership-desc img{
        max-width:5rem;
        object-fit: cover;
    }
    .membership-desc{
        margin:0rem auto;
        padding:2rem 4rem;
    }

`