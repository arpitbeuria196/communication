import React, { useEffect, useState } from "react";

const Body = () => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [autoSuggestion, setAutoSuggestion] = useState(false);
  const [tick, setTick] = useState(false);

  const handleText = (e) => {
    setText(e.target.value);
    setAutoSuggestion(true);
  };

  useEffect(() => {
    let timer;
    if (text.length >= 2) {
      timer = setTimeout(() => {
        fetchApiCall();
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  const selectedHandle = (index) => {
    const copyingArray = [...selected, suggestions[index]];
    setSelected(copyingArray);
    setText("");
  };

  const handleTick = (index) => {
    setTick(!tick);
  };

  const fetchApiCall = async () => {
    try {
      const response = await fetch(
        `https://api.frontendeval.com/fake/food/${text}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const removeHandle = (index) => {
    const copyingArray = [...selected];
    copyingArray.splice(index, 1);
    setSelected(copyingArray);
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-blue-100 to-blue-300 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">My Shopping List</h1>
      <div className="relative w-2/3">
        <input
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter food item..."
          value={text}
          onChange={handleText}
        />
        {text.length > 0 && (
          <div className="absolute w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg z-10">
            {suggestions.map((sugest, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => selectedHandle(index)}
              >
                {sugest}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-2/3 mt-6">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">
          Selected Items
        </h2>
        {selected.length > 0 ? (
          selected.map((select, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white border border-gray-300 rounded-lg p-3 shadow-sm mb-3"
            >
              <div
                className={`flex items-center ${
                  tick ? "line-through text-gray-400" : "text-gray-700"
                }`}
              >
                <button
                  className={`p-2 rounded-full mr-4 ${
                    tick
                      ? "bg-green-400 text-white"
                      : "bg-gray-200 hover:bg-green-400 hover:text-white"
                  }`}
                  onClick={() => handleTick(index)}
                >
                  ✔️
                </button>
                {select}
              </div>
              <button
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={() => removeHandle(index)}
              >
                ❌
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items selected yet.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
