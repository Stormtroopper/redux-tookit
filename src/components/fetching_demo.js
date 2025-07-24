import React, { useEffect, useState } from "react";
import { useLazyGetProductQuery } from "../features/slice";

// demo implementation of an iife //
(() => {
  setTimeout(() => {
    console.log("...loading");
  }, 15000);
})();

// Component name must start with uppercase
export const Fetching_demo = () => {
  const [getProduct, { data, isLoading, error }] = useLazyGetProductQuery();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) {
      getProduct(search);
    }
  };

//   useEffect(() => {
//     console.log('Checking Prod Data:', data);
//   }, [data]);

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
      
      {data && (
        <div>
          <h3>Search Results:</h3>
          <p>Total products found: {data.total}</p>
          <div>
            {data.map(({ id, title, price, thumbnail }) => (
              <div key={id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <h4>{title}</h4>
                <p>Price: ${price}</p>
                {thumbnail && <img src={thumbnail} alt={title} width="100" />}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {data &&data?.length===0 &&(
        <div>No products found for "{search}"</div>
      )}
    </>
  );
};