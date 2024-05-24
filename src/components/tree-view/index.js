import React, { useState } from 'react';
import menus from './data';
import './style.css';
import { useEffect } from 'react';


function TreeView({ data , level = 0 }){

  const[expanded, setExpanded] = useState({});

  const toggleExpand = (label) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [label]: !prevExpanded[label],
    }));
  };


  return (
    <div className="tree-view-container"> 

      <ul className="menu-list-container">
        {data && data.length && data.map((item) => (
          <li>  
              <div className="menu-item"> 
                <span>{item.label}</span>
                {item && item.children && item.children.length && (<button  onClick={() => toggleExpand(item.label)}> {expanded[item.label] ? '−' : '+'} </button> )}  
              </div>
              {item.children && item.children.length > 0 && expanded[item.label] && (<TreeView data={item.children} level={level + 1} /> )}
          </li>
        ))}
      </ul>
      
    </div>
  );
};


export default TreeView;
