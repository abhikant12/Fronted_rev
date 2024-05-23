import { useEffect, useState } from "react";


function RandomColor(){
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");                    // hex color is # followed by 6 digit[1 to 9]/character[A to F];

  function handleCreateRandomHexColor(){                                            // #67AF65
    const hex = '0123456789ABCDEF';
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];          // Math.random() Returns a pseudorandom number between 0 and 1.
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor(){                                     // rgb(11,111,190)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g}, ${b})`);
  }

  return (
    <div  style = {{width: "100vw", height: "100vh", background: color }} >
        <div style={{ padding : "25px" }}>
            <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
            <button onClick = { typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor } > Generate Random Color </button>
        </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontSize: "60px", flexDirection:'column', gap:'20px' }} >
        <h3> {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"} </h3>
        <h1> {color} </h1>
      </div>
    </div>
  );
}

export default RandomColor;