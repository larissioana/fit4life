import styled from "styled-components"


const FormSubmitted=()=>{
    return(
        <Wrapper>
         <h1>Thank you!</h1>
        </Wrapper>
    )
};
export default FormSubmitted;
const Wrapper=styled.div`
    margin:0 auto;
    display:grid;
    place-content: center;
   
    h1{
    font-family: 'Overpass Mono', monospace;
    font-size:clamp(1.5rem,6vw,7rem);
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%)
    }
    
`