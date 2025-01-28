import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim() !== "") {
        fetchData(input);
      }
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const fetchData = async (input) => {
    try {
      const response = await fetch(`https://api.frontendeval.com/fake/food/${input}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div className="flex  items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-4">
        {/* Search Input */}
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={handleInput}
          placeholder="Search for food..."
        />

        {/* Suggestions List */}
        <div className="mt-4 border border-gray-300 rounded-lg shadow-md">
          {suggestions.length > 0 ? (
            <ul className="divide-y">
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          ) : (
            input && (
              <div className="px-4 py-2 text-gray-500 text-center">
                No suggestions found.
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
