import React from "react";
import "./index.css";

const Image = ({ image }) => {
  return (
    <figure
      itemprop="image"
      itemscope=""
      itemtype="https://schema.org/ImageObject"
      data-test="photo-grid-masonry-figure"
    >
      <div className="MbNnd">
        <div className="imageSubContainer">
          <a
            className="imageSubContainerTag"
            itemprop="contentUrl"
            title=""
            href="/"
          >
            <div className="imageSubContainer">
              <div
                style={{ backgroundColor: "#f3f3f3" }}
                className="imageWrapper"
              ></div>

              <div className="imageWrapper2">
                <img
                  alt="a table topped with lots of papers on top of a wooden table"
                  src="https://images.unsplash.com/photo-1708793699440-67fa853abd4d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
                  sizes="..."
                  itemprop="thumbnailUrl"
                  loading="lazy"
                  data-perf="lazy-loaded-img"
                  className="image"
                  style={{ aspectRatio: "3840 / 5760" }}
                  data-test="photo-grid-masonry-img"
                />
              </div>
            </div>
          </a>

          <div className="hoverContainer">
            <div className="image">
              <div className="KFwcR qO6EX"></div>
              <div className="iconContainer">
                <div className="iconTopContainer">
                  <div></div>
                  <div className="iconTop qO6EX">
                    <button
                      type="button"
                      className="_x3he MLKp_ MyWr6 CyIN2 DQBsa p1cWU KHq0c jpBZ0 EzsBC KHq0c IKU9M OHtll I0aPD dEcXu"
                      title="Like this image"
                    >
                      <svg
                        className="TrVF8"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        version="1.1"
                        aria-hidden="false"
                      >
                        <desc lang="en-US">A heart</desc>
                        <path d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="xFNhr PUaFg MyWr6 CyIN2 DQBsa p1cWU KHq0c jpBZ0 EzsBC KHq0c IKU9M OHtll I0aPD dEcXu"
                      title="Add this image to a collection"
                    >
                      <svg
                        className="utUL6"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        version="1.1"
                        aria-hidden="false"
                      >
                        <desc lang="en-US">A plus sign</desc>
                        <path d="M21.8 10.5h-8.3V2.2h-3v8.3H2.2v3h8.3v8.3h3v-8.3h8.3z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="iconBottomContainer">
                  <div className="iconBottom qO6EX">
                    <span>
                      <div>
                        <span className="user">
                          <a href="/@joonas1233">
                            <div className="userImg">
                              <div>
                                <img
                                  className="D1hjc"
                                  loading="lazy"
                                  src="https://images.unsplash.com/profile-1708793968495-b24b793a721eimage?bg=fff&amp;crop=faces&amp;dpr=1&amp;h=32&amp;w=32&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3"
                                  srcSet="https://images.unsplash.com/profile-1708793968495-b24b793a721eimage?bg=fff&amp;crop=faces&amp;dpr=2&amp;h=32&amp;w=32&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3 2x"
                                  alt="Go to Joonas Sild's profile"
                                  width="32"
                                  height="32"
                                />
                              </div>
                            </div>
                          </a>
                          <div className="username">
                            <a
                              className="N2odk RZQOk eziW_ KHq0c cl4O9 fD_Xr eziW_"
                              href="/@joonas1233"
                            >
                              Joonas Sild
                            </a>
                            <div className="AVon2 RZQOk iOqvK J8PMN"></div>
                          </div>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="qO6EX download">
                    <a
                      data-test="non-sponsored-photo-download-button"
                      rel="nofollow"
                      download=""
                      target="_blank"
                      className="downloadIcon"
                      title="Download this image"
                      href="https://unsplash.com/photos/KN4qjbqsMps/download?ixid=M3wxMjA3fDB8MXxhbGx8NHx8fHx8fDJ8fDE3MDg5MjcyMjF8&amp;force=true"
                    >
                      <svg
                        className="m9vYO"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        version="1.1"
                        aria-hidden="false"
                      >
                        <desc lang="en-US">Arrow pointing down</desc>
                        <path d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default Image;
