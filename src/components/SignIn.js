
import styled from "styled-components";
import { Wrapper} from "../pages/Register";
import { useState } from "react";
import { Navigate } from "react-router-dom";
const SignIn=()=>{
    const[formData,setFormData]=useState({
        email:'',
        password:'',
    })
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
        setFormData('')
        setNavigate(true);
    }
    return(
        <>
        <StyleContainer>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} method='POST' data-netlify='true' name='sign-in' action='/sign-in'>
         <label htmlFor="email">Email</label>
         <input onChange={handleChange} value={formData.email} required type='text' name='email'/>
         <div className="line"></div>
         <label htmlFor="password">Password</label>
         <input onChange={handleChange} value={formData.password}required type='password' name='password'/>
         <div className="line"></div>
         <button >Sign In</button>
        </form>
        </StyleContainer>
        
         </>
    )
};
export default SignIn;
const StyleContainer=styled(Wrapper)``;

