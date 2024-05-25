import { useState } from 'react';
import './style.css';


function RandomComponent(){
  return <h1>Some random content</h1>;
}

export default function TabTest(){

  const tabs = [
    {
      label: "Tab 1",
      content: <h1>This is content for Tab 1</h1>,
    },
    {
      label: "Tab 2",
      content: <h1>This is content for Tab 2</h1>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];


  const [currentidx, setcurrentidx] = useState(0);

  return (
    <div className="wrapper">
      <div className="heading">
         {tabs.length > 0 && tabs.map((item, index) => (
             <div onClick={() => setcurrentidx(index)}  key = {item.label}  className = {`tab-item ${currentidx === index ? "active" : ""}`}>
                <span> {item.label} </span>
            </div>
         ))}
      </div>

      <div className="content" style={{ color: "red" }}> {tabs[currentidx] && tabs[currentidx].content}   </div>
    </div>
  )
}