import React from "react";
import styles from "./MobileItemBox.module.css"
const MobileItemBox = (props) => {

    return(
        <>
            <div className={styles.main_container}>
            {/* row 1 start */}
            <video className={styles.vedio1} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url1} type="video/mp4"/>
            </video>
            <div className={styles.twovedio_container_larg}>
            <video className={styles.vedio2} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url2} type="video/mp4"/>
            </video>
            <video className={styles.vedio3} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url3} type="video/mp4"/>
            </video>
            </div>
            <div className={styles.twovedio_container_small}>
            <video className={styles.vedio4} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url4} type="video/mp4"/>
            </video>
            <video className={styles.vedio5} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url5} type="video/mp4"/>
            </video>
            </div>
            {/* row 2 start */}
            <video className={styles.vedio1} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url1} type="video/mp4"/>
            </video>
            <div className={styles.twovedio_container_larg}>
            <video className={styles.vedio2} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url2} type="video/mp4"/>
            </video>
            <video className={styles.vedio3} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url3} type="video/mp4"/>
            </video>
            </div>
            <div className={styles.twovedio_container_small}>
            <video className={styles.vedio4} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url4} type="video/mp4"/>
            </video>
            <video className={styles.vedio5} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url5} type="video/mp4"/>
            </video>
            </div>
            {/* row 3 start */}
            <video className={styles.vedio1} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url1} type="video/mp4"/>
            </video>
            <div className={styles.twovedio_container_larg}>
            <video className={styles.vedio2} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url2} type="video/mp4"/>
            </video>
            <video className={styles.vedio3} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url3} type="video/mp4"/>
            </video>
            </div>
            <div className={styles.twovedio_container_small}>
            <video className={styles.vedio4} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url4} type="video/mp4"/>
            </video>
            <video className={styles.vedio5} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url5} type="video/mp4"/>
            </video>
            </div>
            </div>
        </>
    )
}

export default MobileItemBox;