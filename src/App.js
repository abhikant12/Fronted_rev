import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/Images-slider';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import StarRating from './components/Star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';


function App() {


  return (
    <div className="App">
        {/* <Accordian/>
        <RandomColor/>
        <StarRating noOfStars={10}/>
        <ImageSlider/>
        <LoadMoreData/>
        <TreeView data = {menus} /> */}
        <QRCodeGenerator/>

    </div>
  );
}

export default App;
