import React from "react"
import styles from "./ThereItemBox.module.css"
const ThereItemBox = (props) => {

    return(
        <>
            <div className={styles.main_container}>
            <video className={styles.vedio} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url1} type="video/mp4"/>
            </video>
            <video className={styles.vedio} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url2} type="video/mp4"/>
            </video>
            <video className={styles.vedio} autoplay="autoplay"id="vid" loop="loop" muted>
            <source src={props.url3} type="video/mp4"/>
            </video>
            </div>
        </>
    )
}

export default ThereItemBox;