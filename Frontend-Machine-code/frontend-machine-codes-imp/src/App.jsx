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
import { useEffect, useState } from "react";
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


  const [query,setQuery] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSearch = (e)=>
  {
    setQuery(e.target.value);
    console.log(query);
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
      console.log("Debounced Search Query:", query);
    },250)


    return ()=> clearTimeout(timer);
  },[query])



  


  return (
    <BrowserRouter>
      <div className="min-h-screen w-full flex flex-col bg-gray-50 dark:bg-gray-900">
        <div className="bg-gray-800 dark:bg-gray-950 p-4">
          <Header className="text-white" />
        </div>
        <div className="flex justify-center py-6">
          <button
            className="px-6 py-3 bg-blue-500 dark:bg-blue-700 text-white font-medium rounded-xl shadow-md hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all duration-200"
            onClick={() => dispatch(toggleTheme())}
          >
            {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
        <div>
        <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search......."
        className="p-2 border rounded text-white p-5 ml-5"
      />



          </div>

        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/carousel" element={<Carousel/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/customModal" element={<CustomModal />} />
            <Route path="/starRating" element={<StarRating />} />
            <Route path="/dynamicProgress" element={<DynamicProgress />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/infiniteScrolling" element={<InfiniteScrolling />} />
            <Route path="/accordian" element={<Accordian/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;