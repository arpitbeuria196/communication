import React, { useState, useEffect } from "react";

const images = [
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
  "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
  "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
];

const ImageSlides = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
    const intervalId = setInterval(() => {
      loadNextImage();
    }, 3000);

    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    };
  }, []);

  const loadNextImage = () => {
    setActive((active) => (active + 1) % images.length);
  };

  const loadPrevImage = () => {
    setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
  };

  return (
    <div className="relative flex items-center justify-center p-4 m-4">
      {/* Arrows above the image */}
      <div className="absolute top-58 flex justify-between w-2/4">
        <img
          onClick={loadPrevImage}
          className="w-8 h-8 cursor-pointer"
          alt="left arrow"
          src="https://cdn0.iconfinder.com/data/icons/glyphpack/26/nav-arrow-left-512.png"
        />
        <img
          onClick={loadNextImage}
          className="w-8 h-8 cursor-pointer  top-58"
          alt="right arrow"
          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        />
      </div>

      {/* Image */}
      <img
        className="w-2/4 h-auto rounded-lg shadow-md"
        src={images[active]}
        alt="Slideshow"
      />
    </div>
  );
};

export default ImageSlides;
