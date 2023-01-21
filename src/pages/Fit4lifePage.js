//components
import Header from "../components/Header"
import Fit4LifeSection from "../components/Fit4lifeSection";
import FirstPage from "../components/FirstPage";
import SecondPage from "../components/SecondPage";
import ThirdPage from "../components/ThirdPage";
import FourthPage from "../components/FourthPage";
import FifthPage from "../components/FifthPage";
import SixthPage from "../components/SixthPage";
import SeventhPage from "../components/SeventhPage";
import PageEight from "../components/PageEight";
import { pageAnimation } from "../animation";
import {motion} from 'framer-motion';
import ScrollToTop from "../components/ScrollToTop";
const Fit4LifePage=()=>{
    return(
        <motion.div variants={pageAnimation} exit='exit' initial='hidden' animate='show'>
         <Header/>
         <Fit4LifeSection/>
         <FirstPage/>
         <SecondPage/>
         <ThirdPage/>
         <FourthPage/>
         <FifthPage/>
         <SeventhPage/>
         <PageEight/>
         <SixthPage/>
        <ScrollToTop/>
        </motion.div>
    )
};
export default Fit4LifePage;