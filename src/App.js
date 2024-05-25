import './App.css';
import Accordian from './components/accordian';
import TabTest from './components/custom-tab';
import ImageSlider from './components/Images-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
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
        <TreeView data = {menus} />
        <QRCodeGenerator/>
        <LightDarkMode/>
        <ScrollIndicator/> */}
        <TabTest/>

    </div>
  );
}

export default App;
