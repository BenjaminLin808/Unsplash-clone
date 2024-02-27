import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.get("/search", async (req, res) => {
  const text = req.query.text;

  try {
    if (!text) {
      console.log("No search term provided, fetching recent photos");
      const response = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.FLICKR_API_KEY}&format=json&nojsoncallback=1&extras=url_m`
      );
      const data = await response.json();
      res.json(data);
    } else {
      console.log("Fetching photos with search term:", text);
      const response = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API_KEY}&format=json&nojsoncallback=1&text=${text}&extras=url_m`
      );
      const data = await response.json();
      res.json(data);
    }
  } catch (error) {
    console.error("Error fetching data from Flickr API:", error);
    res.status(500).json({ error: "Error fetching data from Flickr API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
