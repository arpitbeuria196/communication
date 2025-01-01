import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCrad';

// `https://dummyjson.com/products?limit=${LIMIT}&skip=${
  //  currentPage * LIMIT
//}&select=title,price,description,thumbnail,discountPercentage`

const LIMIT = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);

  const [buttonNextDisplay, setButtonNextDisplay] = useState(true);
  const [buttonPrevDisplay, setButtonPrevDisplay] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${
          currentPage * LIMIT
        }&select=title,price,description,thumbnail,discountPercentage`
      );

      console.log(response.data);

      // Update products and pagination controls
      setProducts(response.data.products);

      const total = response.data.total;
      const skip = response.data.skip;

      // Update total pages
      setNoOfPages(Math.ceil(total / LIMIT));

      console.log(noOfPages)

      // Update button visibility
      setButtonNextDisplay(skip + LIMIT < total);
      setButtonPrevDisplay(skip > 0);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const nextPageHandle = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPageHandle = () => {
    setCurrentPage((prev) => prev - 1);
  };

 

  

  return (
    <div>
      <div className="flex flex-wrap">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      <div className="flex justify-center mt-4">
        {buttonPrevDisplay && (
          <div
            className="p-2 bg-gray-300 hover:bg-gray-400 rounded mr-2 cursor-pointer"
            onClick={prevPageHandle}
          >
            Prev
          </div>
        )}

         {[...Array(noOfPages).keys()].map((pN) => (
          <span
            className={
              "text-xl p-4 " + (pN === currentPage && "font-bold underline")
            }
            key={pN}
            onClick={() => {
              setCurrentPage(pN);
            }}
          >
            {pN + 1}
          </span>
        ))}
        {buttonNextDisplay && (
          <div
            className="p-2 bg-gray-300 hover:bg-gray-400 rounded cursor-pointer"
            onClick={nextPageHandle}
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;