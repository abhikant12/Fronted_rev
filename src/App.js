import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/Images-slider';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random-color';
import StarRating from './components/Star-rating';


function App() {


  return (
    <div className="App">
        {/* <Accordian/>
        <RandomColor/>
        <StarRating noOfStars={10}/>
        <ImageSlider/> */}
        <LoadMoreData/>
        
    </div>
  );
}

export default App;
