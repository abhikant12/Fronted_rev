import { useEffect } from "react";
import { useState } from "react";
import "./style.css";


 function LoadMoreData(){

  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchProducts(){
    try{
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=${10}&skip=${count*10}`);          
      // above url has limit and skip means it first skip (count*20) top data and then given limit no of data;

      const result = await response.json();
      if(result?.products?.length){
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } 
    catch(e){
      console.log("error while fetching data");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if(loading && count == 0){
    return <div>Loading data ! Please wait.</div>;
  }


  return (
    <div className = "load-more-container">
      <div className = "product-container">
        {(products?.length >  0) && (products.map((item, index) => (
                <div className = "product"  key = {index}>
                    <img src = {item.thumbnail} alt = "image" />
                    <p> {item.title} </p>
                </div>
            )))}
      </div>

      <div className="button-container">
         {products.length < 100 ? (
          <button onClick = {() => setCount(count + 1)} disabled = {loading}> {loading ? 'Loading...' : 'Load More Products'} </button>
        ) : (
          <p>You have reached 100 products</p>
        )}
      </div>
    </div>
  );
}


export default LoadMoreData;