import React from "react";
import "./index.css";
import SearchBar from "../SearchBar.jsx";
import Card from "../Card/index.jsx";
import Category from "../Category/index.jsx";
const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="bannerSubContainer">
        <div className="bannerTitle">
          <h1>Unsplash</h1>
          <p>The internet's source for visuals.</p>
          <p>Powered by creators everywhere.</p>
          <div className="divider"></div>
          <div>
            <span>Trending:</span>
            <ul className="bannerTrending">
              <li>
                <a href="#"> flower, </a>
              </li>
              <li>
                <a href="#">wallpapers, </a>
              </li>
              <li>
                <a href="#">backgrounds, </a>
              </li>
              <li>
                <a href="#">happy, </a>
              </li>
              <li>
                <a href="#">love</a>
              </li>
            </ul>
          </div>
        </div>
        <SearchBar style={true} />
      </div>
      <Card padding={true}>
        <div className="categoryContainer">
          <Category text="Marvel" />
          <Category text="Happy Valentines Day" />
          <Category text="Valentine" />
          <Category text="Heart" />
          <Category text="Allergy" />
          <Category text="Parade" />
        </div>
        <div className="traffic">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            aria-hidden="false"
          >
            <desc lang="en-US">A trend sign</desc>
            <path d="m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6Z"></path>
          </svg>
          <span>
            <a href="#">See trending searches</a>
          </span>
        </div>
      </Card>
      <Card>
        <div className="bannerImagesContainer">
          <div className="bannerImages">
            <div className="image1Container">
              <div className="image1Style">
                <div className="image1ContentContainer">
                  <div className="image1Content"></div>
                  <div className="image1StyleContainer">
                    <img
                      srcSet="https://plus.unsplash.com/premium_photo-1675035661871-c680999e5246?dpr=1&amp;h=304&amp;q=80&amp;w=190&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3 1x, https://plus.unsplash.com/premium_photo-1675035661871-c680999e5246?dpr=2&amp;h=304&amp;q=80&amp;w=190&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3 2x"
                      src="https://plus.unsplash.com/premium_photo-1675035661871-c680999e5246?h=304&amp;q=80&amp;w=190&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3"
                      loading="lazy"
                      className="image1"
                      // style="aspect-ratio: 1 / 1.6;"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="image2Container">
              <div className="image2Style">
                <div className="image2ContentContainer">
                  <div className="image2Content"></div>
                  <div className="image2StyleContainer">
                    <img
                      srcSet="https://plus.unsplash.com/premium_photo-1683146513906-bae1dbdb674d?dpr=1&amp;h=152&amp;q=80&amp;w=95&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3 1x, https://plus.unsplash.com/premium_photo-1683146513906-bae1dbdb674d?dpr=2&amp;h=152&amp;q=80&amp;w=95&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3 2x"
                      src="https://plus.unsplash.com/premium_photo-1683146513906-bae1dbdb674d?h=152&amp;q=80&amp;w=95&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3"
                      loading="lazy"
                      className="image2"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="image3Container">
              <div className="image2Style">
                <div className="image2ContentContainer">
                  <div className="image2Content"></div>
                  <div className="image2StyleContainer">
                    <img
                      srcSet="https://plus.unsplash.com/premium_photo-1664884884449-1dc1eeed2b7c?dpr=1&amp;h=152&amp;q=80&amp;w=95&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3 1x, https://plus.unsplash.com/premium_photo-1664884884449-1dc1eeed2b7c?dpr=2&amp;h=152&amp;q=80&amp;w=95&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3 2x"
                      src="https://plus.unsplash.com/premium_photo-1664884884449-1dc1eeed2b7c?h=152&amp;q=80&amp;w=95&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3"
                      loading="lazy"
                      className="image2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Banner;
