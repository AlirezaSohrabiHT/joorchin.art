import React from "react";
import ThereItemBox from "../components/ThereItremBox/ThereItemBox";
import styles from "./Home.module.css"
const Home = () => {

    return(
        <>
        <div className="container">
            <div className="row">
                <div className={`col-12 ${styles.main_container}`}>
                    <div className={`${styles.column} ${styles.right}`}>
                    <ThereItemBox url1="https://art.joorchin.co/wp-content/uploads/2024/01/header.mp4" 
                                url2="https://art.joorchin.co/wp-content/uploads/2024/01/header.mp4"
                                url3="https://art.joorchin.co/wp-content/uploads/2024/01/header.mp4" />
                    </div>
                    <div className={`${styles.column}`}>
                    <ThereItemBox url1="https://art.joorchin.co/wp-content/uploads/2024/01/header.mp4" 
                                url2="https://art.joorchin.co/wp-content/uploads/2024/01/header.mp4"
                                url3="https://art.joorchin.co/wp-content/uploads/2024/01/header.mp4" />
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Home;