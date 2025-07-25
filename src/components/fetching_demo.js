import React, { useEffect, useState } from "react";
import { useLazyGetAllProductsQuery, useLazyGetProductQuery } from "../features/slice";

// demo implementation of an iife //
(() => {
  setTimeout(() => {
    console.log("...loading");
  }, 15000);
})();

// Component name must start with uppercase
export const Fetching_demo = () => {
  const [getProduct, { data:singledata, isLoading, error }] = useLazyGetProductQuery();
  const [getAllProducts, { data:completedata }] = useLazyGetAllProductsQuery();

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()!=='All') {
      getProduct(search);
    }else{
      getAllProducts(search)
    }
  };

  useEffect(() => {
    console.log('Checking Prod Data:', completedata);
  }, [completedata]);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <>
      <input
        type="text"
        value={search}
        placeholder="enter a product"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      {singledata && (
        <div>
          <h3>Search Results:</h3>
          <p>Total products found: {singledata.total}</p>
          <div>
            {singledata.map(({ id, title, price, thumbnail }) => (
              <div key={id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <h4>{title}</h4>
                <p>Price: ${price}</p>
                {thumbnail && <img src={thumbnail} alt={title} width="100" />}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {singledata &&singledata?.length===0 &&(
        <div>No products found for "{search}"</div>
      )}
      {completedata&&(
        <div>
          <h3>Search Results:</h3>
          <p>Total products found: {completedata.total}</p>
          <div>
            {completedata.map(({ id, title, price, thumbnail }) => (
              <div key={id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <h4>{title}</h4>
                <p>Price: ${price}</p>
                {thumbnail && <img src={thumbnail} alt={title} width="100" />}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};