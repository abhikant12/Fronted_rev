// install a pacakge "npm i react-qr-code" to  use inbuilt qr-code generator;
import { useState } from "react";
import QRCode from "react-qr-code";                 

function QRCodeGenerator(){

  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode(){
    setQrCode(input);
    setInput('')
  }

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems: "center" , flexDirection: "column" }} >

      <h1> QR Code Generator </h1>
      <div style = {{ display:"flex", gap:"10px" }} >
        <input type="text" value={input} onChange = {(e) => setInput(e.target.value)}  placeholder="Enter your value here" />
        <button onClick = {() => handleGenerateQrCode()}  disabled = {input === "" || input.trim() === ""} > Generate </button>
      </div>
      <div style = {{ marginTop: "15px", }} >
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}

export default QRCodeGenerator;