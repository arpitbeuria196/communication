import React, { useState, useCallback } from "react";

const debouncingLogic = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const throttleLogic = (fn, delay) => {
  let isThrottling = false;

  return (...args) => {
    if (!isThrottling) {
      fn(...args);
      isThrottling = true;

      setTimeout(() => {
        isThrottling = false;
      }, delay);
    }
  };
};

const Body = () => {
  const [normalBullets, setNormalBullets] = useState([]); // Bullets for normal flow
  const [debounceBullets, setDebounceBullets] = useState([]); // Bullets for debounce flow
  const [throttleBullets, setThrottleBullets] = useState([]); // Bullets for throttle flow

  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update mouse position
  const handleMouseMove = useCallback(
    (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      console.log(position);
    },
    []
  );
  

  // Fire a bullet for normal flow
  const handleNormal = () => {
    setNormalBullets((prev) => [...prev, "🔴"]); // Add a bullet
  };

  // Fire a bullet for debounced flow
  const handleDebounce = useCallback(
    debouncingLogic(() => {
      setDebounceBullets((prev) => [...prev, "🔵"]); // Add a bullet
    }, 500),
    []
  );

  // Fire a bullet for throttled flow
  const handleThrottle = useCallback(
    throttleLogic(() => {
      setThrottleBullets((prev) => [...prev, "🟢"]); // Add a bullet
    }, 500),
    []
  );

  return (
    <div
      className="p-4"
      onMouseMove={handleMouseMove}
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* Circle Follower */}
      <div
        style={{
          position: "absolute",
          top: position.y - 25, 
          left: position.x - 25, // Adjust to center circle on mouse pointer
          width: "50px",
          height: "50px",
          backgroundColor: "purple",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "top 0.1s, left 0.1s",
        }}
      ></div>

      {/* Normal Gun */}
      <div className="flex items-center mb-6">
        <button
          className="bg-gray-300 px-4 py-2 rounded mr-4"
          onClick={handleNormal}
        >
          Fire Normal
        </button>
        <div className="flex gap-2">
          {normalBullets.map((bullet, index) => (
            <span key={index} className="text-xl">
              {bullet}
            </span>
          ))}
        </div>
      </div>

      {/* Debounced Gun */}
      <div className="flex items-center mb-6">
        <button
          className="bg-blue-300 px-4 py-2 rounded mr-4"
          onClick={handleDebounce}
        >
          Fire Debounced
        </button>
        <div className="flex gap-2">
          {debounceBullets.map((bullet, index) => (
            <span key={index} className="text-xl">
              {bullet}
            </span>
          ))}
        </div>
      </div>

      {/* Throttled Gun */}
      <div className="flex items-center">
        <button
          className="bg-green-300 px-4 py-2 rounded mr-4"
          onClick={handleThrottle}
        >
          Fire Throttled
        </button>
        <div className="flex gap-2">
          {throttleBullets.map((bullet, index) => (
            <span key={index} className="text-xl">
              {bullet}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
