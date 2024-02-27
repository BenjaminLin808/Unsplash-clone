import "./App.css";
import Banner from "./components/Banner/index.jsx";
import Navigation from "./components/Navigation.jsx";
import NavigationLinks from "./components/NavigationLinks/index.jsx";
import ImageContainer from "./components/ImageContainer/index.jsx";
import { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const searchImages = async (searchTerm) => {
    try {
      setLoading(true); // Set loading to true before fetching data
      let response = null;
      if (!searchTerm) {
        response = await fetch("http://localhost:3000/search");
        const data = await response.json();
        setImages(data.photos.photo);
        return;
      } else {
        response = await fetch(
          `http://localhost:3000/search?text=${searchTerm}`
        );
      }
      const data = await response.json();
      console.log(data.photos.photo);
      setImages(data.photos.photo);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("searchTerm", searchTerm);
    searchImages(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <Navigation search={setSearchTerm} />
      <NavigationLinks />
      <Banner search={setSearchTerm} />
      {loading ? null : <ImageContainer images={images} />}
    </>
  );
}

export default App;
