import React from "react";
import styles from './Menu.module.css';

const Menu = () => {
    const menuLinks = [
        {}
    ]

    return(
        <div className={styles.menu_container}>
            <ul>
                <li>
                    <a href="#">خانه</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;