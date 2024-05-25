import { useState } from "react";




function LightDarkMode(){

   const [color, setColor] = useState("white");
   
   function toggle(){
        if(color == "white") setColor("black");
        else setColor("white");
   }
    
    return (
        <div style = {{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column" , backgroundColor: color }}>
            <h1 style={{ color: color === "white" ? "black" : "white" }}  > Hello World ! </h1>
            <button onClick = {() => toggle()} style={{backgroundColor: color === "white" ? "black" : "white" ,color: color ,borderRadius:"8px" ,fontSize:"20px" ,padding:"10px"  }} > change Theme </button>
        </div>
    )
};

export default LightDarkMode;