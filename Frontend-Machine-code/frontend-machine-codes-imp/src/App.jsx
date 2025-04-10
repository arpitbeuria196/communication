import "./index.css"; // Tailwind CSS import
import CustomModal from "./Comments/CustomModal";
import DynamicProgress from "./Comments/DynamicProgress";
import InfiniteScrolling from "./Comments/InfiniteScrolling";
import Pagination from "./Comments/Pagination";
import StarRating from "./Comments/StarRating";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./utils/themeSlice";
import { useEffect, useRef, useState } from "react";
import Accordian from "./Comments/Accordian";
import Carousel from "./Comments/Carousel";

function Home() {
  return (
    <h1 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white p-6">
      Welcome to My App
    </h1>
  );
}

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const [query, setQuery] = useState("");
  const [inputArr, setInputArr] = useState(new Array(6).fill("")); // 6-digit OTP
  const refArr = useRef([]);

  // Dark mode theme handling
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Search input handler with debounce
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Debounced Search Query:", query);
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  // OTP Input Handler
  const handleChangeOtp = (value, index) => {
    if (isNaN(value)) return;

    const newValue = value.slice(-1); // Only last character if pasted
    const updatedArr = [...inputArr];
    updatedArr[index] = newValue;
    setInputArr(updatedArr);

    if (newValue && index < inputArr.length - 1) {
      refArr.current[index + 1].focus();
    }

    console.log("OTP:", updatedArr.join(""));
  };

  const handleOnKeyDown = (e, index) => {
    if (e.code === "Backspace" && !e.target.value && index > 0) {
      refArr.current[index - 1].focus();
    }
  };

  // Auto focus on first box
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Header */}
        <div className="bg-gray-800 dark:bg-gray-950 p-4">
          <Header className="text-white" />
        </div>

        {/* Toggle Theme */}
        <div className="flex justify-center py-6">
          <button
            className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-200"
            onClick={() => dispatch(toggleTheme())}
          >
            {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search..."
            className="p-3 w-1/2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* OTP Section */}
        <section className="flex flex-col items-center gap-4 p-6">
          <h2 className="text-2xl font-bold">Validate OTP</h2>
          <div className="flex gap-4">
            {inputArr.map((input, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={input}
                className="w-12 h-12 text-center text-xl font-bold rounded-md border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ref={(el) => (refArr.current[index] = el)}
                onChange={(e) => handleChangeOtp(e.target.value, index)}
                onKeyDown={(e) => handleOnKeyDown(e, index)}
              />
            ))}
          </div>
        </section>

        {/* Routes */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/" element={<Home />} />
            <Route path="/customModal" element={<CustomModal />} />
            <Route path="/starRating" element={<StarRating />} />
            <Route path="/dynamicProgress" element={<DynamicProgress />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/infiniteScrolling" element={<InfiniteScrolling />} />
            <Route path="/accordian" element={<Accordian />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
