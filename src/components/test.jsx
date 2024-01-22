// src/components/WordPressData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Lottie from "lottie-react";
const WordPressData = () => {
  // const [jsonData, setJsonData] = useState(null);

  const handleVideoLoadedData = () => {
    // Autoplay the video after it has loaded
    videoRef.current.play();
  };
  return (
        <></>
            /* <div className='card-container'>
              {posts[1] && (
                <div className='card'>

                  {posts[1]._embedded && posts[1]._embedded['wp:featuredmedia'] && (
                    <img
                    className='img-fluid'
                      src={posts[1]._embedded['wp:featuredmedia'][0].source_url}
                      alt={posts[1].title.rendered}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                </div>
              )}
          </div> */

          /* Second Row inside First Column */
          /* <div className='row'>
            <div className='col-12'>
            <div className='card-big-container'>
              {posts[2] && (
                <div className='card'>
                  
                  {posts[2]._embedded && posts[2]._embedded['wp:featuredmedia'] && (
                    <img
                    className='img-fluid'
                      src={posts[2]._embedded['wp:featuredmedia'][0].source_url}
                      alt={posts[2].title.rendered}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                </div>
              )}
              </div>
            </div>
          </div> */
        // </div>
        // <div className='col-6 d-flex flex-column'>
          /* <div className='row'>
            <div className='col-6'>
                <div className='card-container'>
                {posts[0] && (
                <div className='card'>
                  {posts[0]._embedded && posts[0]._embedded['wp:featuredmedia'] && (
                    <img
                    className='img-fluid'
                      src={posts[0]._embedded['wp:featuredmedia'][0].source_url}
                      alt={posts[0].title.rendered}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                </div>
              )}
                </div>

            </div>
            <div className='col-6'>
            <div className='card-container'>
              {posts[1] && (
                <div className='card'>

                  {posts[1]._embedded && posts[1]._embedded['wp:featuredmedia'] && (
                    <img
                    className='img-fluid'
                      src={posts[1]._embedded['wp:featuredmedia'][0].source_url}
                      alt={posts[1].title.rendered}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                </div>
              )}
              </div>
            </div>
          </div> */

          /* Second Row inside First Column */
          /* <div className='row'>
            <div className='col-12'>
            <div className='card-big-container'>
              {posts[2] && (
                <div className='card'>
                  
                  {posts[2]._embedded && posts[2]._embedded['wp:featuredmedia'] && (
                    <img
                    className='img-fluid'
                      src={posts[2]._embedded['wp:featuredmedia'][0].source_url}
                      alt={posts[2].title.rendered}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                </div>
              )}
              </div>
            </div>
          </div> */
        // </div>
  );
};

export default WordPressData;
