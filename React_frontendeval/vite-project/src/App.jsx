import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApi();
    window.addEventListener("scroll", scrollHandle);

    return () => window.removeEventListener("scroll", scrollHandle);
  }, []);



  const fetchApi = useCallback(async () => {
    if (loading) return; // Prevent multiple calls
    setLoading(true);

    try {
      const response = await fetch(`https://meme-api.com/gimme/wholesomememes/5`);
      const data = await response.json();

      setCards((prevCards) => [...prevCards, ...data.memes]);
    } catch (error) {
      console.error("Error fetching memes:", error);
    } finally {
      setLoading(false);
    }
  },[]);

  const scrollHandle = useCallback(()=>{
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        fetchApi();
      }
  },[loading,fetchApi])


  
  return (
    <div className="App">
      <h1>Wholesome Memes</h1>
      <div className="meme-container">
        {cards.map((image, index) => (
          <img key={index} alt={image.title} src={image.url} className="meme-image" />
        ))}
      </div>
      {loading && <p>Loading more memes...</p>}
    </div>
  );
}

export default App;
