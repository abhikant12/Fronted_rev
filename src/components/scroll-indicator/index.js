import { useEffect, useState } from "react";
import "./style.css";

export default function ScrollIndicator(){

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(){
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      if(data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      return (<div> {e.Message} </div> );       
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  function handleScrollPercentage() {
    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => { window.removeEventListener("scroll", () => {}); };
  }, []);

  if(loading){
    return <div>Loading data ! Pleaae wait</div>;
  }


  return (
    <div>
      <div className="top-container">
        <h1> Custom Scroll Indicator </h1>
        <div className="scroll-progress-tracking-container">
          <div  className="current-progress-bar" style={{ width: `${scrollPercentage}%` }} ></div>
        </div>
      </div>
      <div className="data-container">
        {data?.length > 0 && data.map((dataItem) => <p>{dataItem.title}</p>)}
      </div>
    </div>
  );
}



/*
-> document.body.scrollTop: This property gives the number of pixels that the document's body has been scrolled vertically.
-> document.documentElement.scrollTop: This property gives the number of pixels that the HTML element has been scrolled vertically.

-> document.documentElement.scrollHeight: This property returns the height of the entire document, including the portion not currently visible in the viewport.
-> document.documentElement.clientHeight: This property returns the height of the visible part of the document (i.e., the viewport height).

-> By subtracting clientHeight from scrollHeight, you get the total height that is scrollable.

howMuchScrolled / height: This calculates the proportion of the total scrollable height that has been scrolled. It gives a value between 0 and 1. 
Multiplying by 100 converts this proportion into a percentage.
*/