import {useState} from 'react';

const Toggle=({children,title})=>{
    const[toggle,setToggle]=useState(false);
    return(
        <div onClick={()=>setToggle(!toggle)}>
        <div className="question">
        <h3>{title}</h3>
          {toggle? children : ''}
          <div className="line"></div>
          </div>
        </div>
    )
};
export default Toggle;