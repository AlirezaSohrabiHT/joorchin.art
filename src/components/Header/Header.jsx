import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from "../../assets/Logo.svg"
import styles from "./Header.module.css"
const Header = () => {
    const [imageURL, setImageURL] = useState('');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // const response = await axios.get('https://art.joorchin.co/wp-json/wp/v2/posts?_embed');
          const response = await axios.get('https://art.joorchin.co/wp-json/wp/v2/posts?slug=header');
          setPosts(response.data);
          if (response.data && response.data.length > 0) {
            const postId = response.data[0].acf.mp4;
            const mediaResponse = await fetch(`https://art.joorchin.co/wp-json/wp/v2/media/${postId}`);
            const mediaData = await mediaResponse.json();
            // const jsonFileResponse = await fetch(mediaData.guid.rendered);
            // const jsonFileData = await jsonFileResponse.json();
            // setJsonData(jsonFileData);
            if (mediaData.guid && mediaData.guid.rendered) {
              setImageURL(mediaData.guid.rendered);
            }
          
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          console.log(imageURL)
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
    return(
        <>
        <div className="header">
        <div className={`container-fluid ${styles.main_container} `}>
            <div className='row'>
                <div className={`col-12 ${styles.container}`}>
                    <img src={logo}/>
                </div>

            </div>
        </div>
        <video className={styles.header_vedio} autoplay="autoplay"id="vid" loop="loop" muted>
          <source src={imageURL} type="video/mp4"/>
        </video>
        </div>
        </>
    )
}

export default Header;