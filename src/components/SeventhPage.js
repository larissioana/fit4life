//Styles
import styled from "styled-components";
import bg from '../img/exercises.jpg';
import { NavLink } from "react-router-dom";

const SeventhPage=()=>{
    return(
        <Wrapper>
        <div className="membership-desc">
            <h5>Fit4Life Membership</h5>
            <p><strong>Start Your Fitness Journey</strong></p>
            <p>Only 49&euro;/Month</p>
            <NavLink to='/fit4life-register'>
            <button type="button">Join Now</button>
            </NavLink>
        </div>
        
        </Wrapper>
    )
};
export default SeventhPage;

const Wrapper=styled.div`
    margin:3rem auto;
    background-image: url(${bg});
    width:100%;
    height:100vh;
   background-position:center;
   background-size:cover;
   position:relative;
   font-family: "Poppins",sans-serif;
   .membership-desc {
    max-width: 80rem;
    height: 17rem;
    background-color:#c1c1c17f;
    margin-top: 8%;
    margin-left: 1%;
    padding: 3rem 2rem;
    position: absolute;
    color:black;
    button{
    margin-top: 1.2rem;
    padding: 1rem;
    border: none;
    background-color: rgb(172, 117, 44);
    color: black;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    cursor: pointer;
    &:hover{
        background:#181717;
        color:white;
    }
    }
}
`