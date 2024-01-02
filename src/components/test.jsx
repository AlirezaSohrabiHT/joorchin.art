// src/components/WordPressData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const WordPressData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://art.joorchin.co/wp-json/wp/v2/posts?_embed');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        <div className='container'>
            <div className='row'>
            <div className='col-6 d-flex flex-column'>
          <div className='row'>
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
          </div>

          {/* Second Row inside First Column */}
          <div className='row'>
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
          </div>
        </div>
        <div className='col-6 d-flex flex-column'>
          <div className='row'>
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
          </div>

          {/* Second Row inside First Column */}
          <div className='row'>
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
          </div>
        </div>
            </div>
        </div>
    </div>
  );
};

export default WordPressData;
