import React, { useEffect, useState } from 'react';

const Pagination = () => {
  const [memesData, setMemesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const Content_Per_Page = 4;

  const fetchData = async () => {
    try {
      const fetchURL = await fetch("https://meme-api.com/gimme/50");
      const data = await fetchURL.json();
      setMemesData(data.memes);
    } catch (error) {
      console.error("Error fetching memes:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalPages = Math.ceil(memesData.length / Content_Per_Page);
  const startIndex = (currentPage - 1) * Content_Per_Page;
  const endIndex = startIndex + Content_Per_Page;

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const prevHandle = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const nextHandle = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : totalPages));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Meme Gallery</h1>

      {/* Pagination Controls */}
      <div className="flex justify-center mb-6 space-x-2">
        <button
          onClick={prevHandle}
          className="px-4 py-2 border rounded-md shadow-md bg-white hover:bg-gray-200"
          disabled={currentPage === 1}
        >
          ⬅️
        </button>

        {[...Array(totalPages).keys()].map((v) => (
          <button
            key={v}
            className={`px-4 py-2 border rounded-md shadow-md cursor-pointer ${
              currentPage === v + 1 ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-200"
            }`}
            onClick={() => handlePagination(v + 1)}
          >
            {v + 1}
          </button>
        ))}

        <button
          onClick={nextHandle}
          className="px-4 py-2 border rounded-md shadow-md bg-white hover:bg-gray-200"
          disabled={currentPage === totalPages}
        >
          ➡️
        </button>
      </div>

      {/* Meme Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {memesData.slice(startIndex, endIndex).map((meme, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img className="w-full h-auto rounded-md" src={meme.url} alt="Meme" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
