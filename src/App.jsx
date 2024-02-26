import "./App.css";
import Banner from "./components/Banner/index.jsx";
import Navigation from "./components/Navigation.jsx";
import NavigationLinks from "./components/NavigationLinks/index.jsx";
import ImageContainer from "./components/ImageContainer/index.jsx";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  return (
    <>
      <Navigation />
      <NavigationLinks />
      <Banner />
      <ImageContainer />
    </>
  );
}

export default App;
