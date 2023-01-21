//Styles
import styled from "styled-components";
import { pageAnimation } from "../animation";
import {motion} from 'framer-motion';
import{BsInstagram,BsFacebook,BsYoutube} from 'react-icons/bs';
import { NavLink,Navigate } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import { useState } from "react";

const Register=()=>{
    const[formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    });
    const[navigate,setNavigate]=useState(false);
    if(navigate){
        return <Navigate to='/fit4life-register:id/form'/>
    };

    function handleChange(e){
        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [e.target.name]:[e.target.value]
            }
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        setFormData('');
        setNavigate(true);
    }
    return(
        <>
        <Wrapper variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}
         method="POST"
         data-netlify="true" name='register'>
         <input type='hidden' name='form-name' value="register"/>
         <label htmlFor="firstname">First Name</label>
        
         <input onChange={handleChange} required type='text' name='firstName' value={formData.firstName}/>
         <div className="line"></div>
         <label  htmlFor="lastname">Last Name</label>
         <input onChange={handleChange} required type='text' name='lastName' value={formData.lastName}/>
         <div className="line"></div>
         <label htmlFor="email">Email</label>
         <input onChange={handleChange} required type='text' name='email' value={formData.email}/>
         <div className="line"></div>
         <label htmlFor="password">Password</label>
         <input onChange={handleChange} required type='password' name='password' value={formData.password}/>
         <div className="line"></div>
        <button type='submit'>Create</button>
        </form>
        <div className="login">
            <p>Already have an account?</p>
            <NavLink to="/fit4life-register:id">
            <h4>Sign In</h4>
            </NavLink>
        </div>
        <hr className="white"/>
        <footer className="footer">
         <div className="icons">
            <div className="social-icons">
             <a href="https://www.facebook.com">
             <BsFacebook/>
             </a>
             <a href="https://www.instagram.com">
             <BsInstagram/>
             </a>
             <a href="https://www.youtube.com">
             <BsYoutube/>
             </a>
             </div>
          
         </div>
         <p>&copy; 2023 Larisa Oltean </p>
         </footer>
         </Wrapper>
         
         <ScrollToTop/>
         </>
    )
};
export default Register;
export const Wrapper=styled(motion.div)`
display:block;
margin:4rem auto 6rem auto;
font-family: "Poppins",sans-serif;
h2{
    text-align: center;
    font-family: 'Overpass Mono', monospace;
    font-size:clamp(1.2rem,2vw,1.8rem);
}
form{
    width:100%;
    justify-content: center;
    display:grid;
    padding:5rem 0rem 3rem 0rem;
    label{
        padding-top:1rem;
        font-size:clamp(.8rem,2vw,1rem);
       
    }
    .line{
        width:100%;
        height:1.5px;
        background-color:white;
    }
}
input{
    display:block;
    width:30rem;
    padding-top:1.8rem;
    background:none;
    border:none;
    color:white;
    font-size:1rem;
    
    &:focus{
        outline:none;
    }
  
}
button{
        background:none;
        border:1px solid white;
        margin-top:2rem;
        color:white;
        font-size:clamp(.9rem,2vw,1rem);
        letter-spacing: .1rem;
        padding:1rem 0rem;
        cursor:pointer;
        &:hover{
            background:white;
            color:black;
            transition:all .6s ease-in-out;
        }
    }
    .login{
        display:grid;
        justify-content: center;
        margin-top:3rem;
        p{
            font-size:clamp(.8rem,2vw,1.2rem);
        }
        h4{
            margin-top:1rem;
            cursor:pointer;
            margin-bottom:1.5rem;
            font-size:clamp(.9rem,2vw,1.2rem);
        }
    }
    .white{
        color:white;
    }
    .footer{
    display:grid;
    justify-content: center;
    align-items: center;
    margin-top:3rem;

    .icons{
        display:flex;
        justify-content: space-between;
        align-items: center;
      
        .social-icons{
         font-size:clamp(1.2rem,2vw,3rem);
         background:none;
         display:flex;
         justify-content: space-between;
         
         a{
          
           padding-left:1rem;
         }
        }
    }
    p{
        font-family: 'Overpass Mono', monospace;
        font-size:.7rem;
        margin-top:1rem;
        margin-left:1rem;
       
    }
}

   
@media (max-width:490px){
    input{
        width:20rem;
    }
}
@media (max-width:350px){
    input{
        width:17rem;
    }
}

    
`;

