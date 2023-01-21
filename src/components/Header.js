//Styles
import styled from "styled-components";
//Video
import fitness from '../img/fitness.mp4';


const Header=()=>{
    return(
        <HeaderPage>
          <div  className="header">
          <video className="video-bg" src={fitness} autoPlay loop muted playsInline></video>
          </div>
        </HeaderPage>
    )
};
export default Header;

const HeaderPage=styled.div`
       .video-bg{
        width:100%;
        min-height:60%;
        animation: anim 2s ease-in;
        @keyframes anim{
            from{
                opacity:0;
            }to{
                opacity:1
            }
        }
        
    }
`