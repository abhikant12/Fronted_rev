import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";


function ImageSlider({ url = 'https://picsum.photos/v2/list' , limit = 5, page = 1 }){

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);


  async function fetchImages(getUrl){
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if(data){
        setImages(data);
        setLoading(false);
      }
    } 
    catch(e){
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if(url !== "") fetchImages(url);
  }, []);

  if(loading){
    return <div>Loading data ! Please wait</div>;
  }

  if(errorMsg !== null){
    return <div>Error occured ! {errorMsg}</div>;
  }


  return (
    <div class = "main"> 
    <div className="container">
      <BsArrowLeftCircleFill  onClick={handlePrevious} className="arrow arrow-left" />

      {(images?.length) && (images.map((imageItem, index) => (
             <img alt = "image" src={imageItem.download_url} className = {currentSlide === index ? "current-image" : "hide-current-image"}/>
                )))}

      <BsArrowRightCircleFill onClick = {handleNext} className="arrow arrow-right" />

      <span className = "circle-indicators">
        {(images?.length) && (images.map((_, index) => (
                <button className = {currentSlide === index ? "current-indicator" : "inactive-indicator" } onClick = {() => setCurrentSlide(index)} /> 
                    )))}
      </span>
    </div>
    </div>
  );
}

export default ImageSlider;