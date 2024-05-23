import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css';


function StarRating({ noOfStars = 5 }){
    
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">

      {Array(noOfStars).fill().map((_, index) => (

        <FaStar
          key = {index + 1}
          className = {(index + 1) <= (hover || rating) ? "active" : "inactive"}
          onClick = {() => setRating(index + 1)}
          onMouseEnter = {() => setHover(index + 1)}
          onMouseLeave = {() => setHover(0)}
          size={40}
        />

      ))}

    </div>
  );
}


export default StarRating;
 



/*
Array(noOfStars).fill(): Creates an array with noOfStars elements, all set to undefined.

.map((_, index) => { ... }):  map iterates over each element in the array. '_' represents the current element in the array (which is undefined in this case and not used). 'index' represents the current index of the element in the array.
here we can also use  .map((value, index)  but since value is not used in the function body, _ is a better choice to  improve code readability and signaling to other developers that the first argument is intentionally ignored.

JSX Return: The arrow function implicitly returns a FaStar component for each element in the array, using index + 1 to ensure 1-based indexing.

className={index <= (hover || rating) ? "active" : "inactive"} dynamically assigns the class based on the current hover state or rating.

onMouseEnter : The onMouseEnter event handler is triggered when the mouse cursor enters the boundary of an element. It is often used to change the appearance of an element, display additional information, or trigger animations when the user hovers over the element.
onMouseLeave : The onMouseLeave event handler is triggered when the mouse cursor leaves the boundary of an element. It is often used to revert changes made by onMouseEnter, hide additional information, or stop animations when the user moves the cursor away from the element.

rating: Stores the current selected rating (clicked star).
hover: Stores the current hover state (star under the mouse cursor).

onClick: Updates the rating state when a star is clicked.
onMouseEnter: Updates the hover state when the mouse enters a star. 
onMouseLeave: Resets the hover state to 0 when the mouse leaves a star.
*/