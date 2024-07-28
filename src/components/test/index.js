import { useCallback } from 'react';
import './style.css'
import { useState } from 'react';
import { useEffect } from 'react';
import image from '../../assest/abhi1.jpg'

  


function Design(){

   const [value, setvalue] = useState("");
   
   function handlesubmit(){
    if(value.length == 0) alert("please enter the value");
    else alert("form submitted");
   }

     return (
            <div className='container'> 
                <div className="part1">
                     <img src = {image} alt = "image" />    
                    <h1> Maximizing the developer Productivity  </h1>
                    <p> Maximizing the developer Productivity Maximizing the developer Productivity</p>
                </div>

                <div className="part2"  onSubmit={() => (handlesubmit())}  >
                     <div className='logo'>
                        <h3> QUICK TOOLS </h3>
                     </div>
                    <div className='text'>
                        <h1> Forgot password </h1>
                        <p className="label"> please create password for your account </p>
                    </div>

                     <form className="form">
                        <div  className='input_container' > 
                            <label className = "input_label" for = "email"> Email ID </label>
                            <input className='input_box'  type="text" value = {value} onChange={(e) => (setvalue(e.target.value))} name = "email" /> 
                        </div>
                        <button type = "submit" className='button1'> Submit </button>
                     </form>


                </div>
            </div>
     );
}


export default Design;