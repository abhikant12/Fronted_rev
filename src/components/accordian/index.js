import { useState } from "react";
import data from "./data";
import "./style.css";


//*********Multiple selection***********

function Accordian(){
    const [selected, setSelected] = useState([]);

    function handle(id) {
        if(selected.includes(id)){
            setSelected(selected.filter(item => item !== id));
        }else{
            setSelected([...selected, id]);
        }
    }

return(
        <div className="accordian">
            {data.map((dataItem) => (
                <div className="item">
                    <div className="title"  onClick = {() => handle(dataItem?.id)} >
                        <h1> {dataItem?.question} </h1>
                        <span>{selected.includes(dataItem?.id) ? '-' : '+'}</span>
                    </div>
                    {selected.includes(dataItem?.id) && <div>{dataItem?.answer}</div>}
                </div>
            )
            )}  
        </div>
)
}

export default Accordian;



/*
//*********single selection***********

function Accordian(){
    const [selected, setSelected] = useState(null);

    function handle(id){
        {selected == id ? setSelected(null) : setSelected(id)}
    }

return(
        <div className="accordian">
            {data.map((dataItem) => (
                <div className="item">
                    <div className="title"  onClick = {() => handle(dataItem?.id)} >
                        <h1> {dataItem?.question} </h1>
                        <span>{(selected == dataItem?.id) ? '-' : '+' }</span>
                    </div>
                    {(selected == dataItem?.id) && (<div> {dataItem?.answer} </div>) }
                </div>
            )
            )}  
        </div>
)
}

export default Accordian;
*/