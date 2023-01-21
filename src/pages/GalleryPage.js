//Styles
import styled from "styled-components";
//Images
import coach from '../img/coach.jpg';
//Data
import {gallery} from "../data";
import {useScrollAnimation} from '../useScrollAnimation';
import { container,titleAnim,photoAnimation,fade1,pageAnimation } from '../animation';
import {motion} from 'framer-motion';
import ScrollToTop from "../components/ScrollToTop";

const GalleryPage=()=>{
 const[element,controls]=useScrollAnimation();
    return(
        <Wrapper variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
        <div className="gallery-desc">
            <motion.img variants={photoAnimation} initial="hidden" animate="show" className='coach' src={coach} alt='fitness-coach'/>
            <h1>Kadir</h1>
            <motion.h2 variants={titleAnim} initial="hidden" animate='show'>Your Fitness & Life Coach</motion.h2>
        </div>
        <motion.div ref={element} animate={controls} variants={container}  className="photo-gallery">
            {gallery.map((image)=>{
                
                return <div key={image} className="exercises-gallery">
                    <motion.img variants={fade1} src={image} alt='exercises'/>
                </div>
            })
            }
        </motion.div>
        <ScrollToTop/>
        </Wrapper>
    )
};
export default GalleryPage;

const Wrapper=styled(motion.div)`
overflow-x: hidden;
     margin:0 auto 10rem auto;
    .coach{
        width:100%;
        height:100vh;
        object-fit: cover;
        object-position: top;
    }
    h1{
        position:absolute;
        top:20rem;
        right:10rem;
        font-size:clamp(1.1rem,2vw,3rem);
        font-family: 'Overpass Mono', monospace;
        text-transform: capitalize;
        letter-spacing: .4rem;
       
    }
    h2{
        position:absolute;
        top:25rem;
        right:8rem;
        font-size:clamp(.9rem,2vw,2rem);
    }
    .photo-gallery{
        padding:0rem 3rem;
        margin-top:8rem;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        gap:.8rem;
        place-items: center;
      
        gap:3rem;
      
       img{
        object-fit: cover;
        max-width:20rem;
        height:30rem;
        object-position: center;
       
       }
    }
    @media (max-width:400px){
        overflow-x:hidden;
        .photo-gallery{
            display:flex;
            justify-content: center;
            align-items: center;
            flex-wrap:wrap;
            img{
         width:200px;
        height:200px;
        }
        
        }
       
    }
    
    
`