import React from "react";
import styles from './Footer.module.css';
import logo from '../../assets/Logo.svg';
import instagram from '../../assets/Instagram.svg';
import twitter from '../../assets/Twitter.svg';
import linkedin from '../../assets/Linkedin.svg';

const Footer = () => {
    return(
        <>
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.footer_container}>
                                <div className={styles.footer_top_box}>
                                    <div>
                                        <p>&copy; 2024 Joorchin Digital Marketing Agency.</p>
                                    </div>
                                    <div>
                                        <img src={logo} alt="Joorchin Art Logo" />
                                    </div>
                                    <div className={styles.icons_group}>
                                        <a href="#">
                                            <img src={linkedin} alt="LinkedIn Logo" />
                                        </a>
                                        <a href="#">
                                            <img src={instagram} alt="Instagram Logo" />
                                        </a>
                                        <a href="#">
                                            <img src={twitter} alt="Twitter Logo" />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.footer_bottom_box}>
                                    <p className={`${styles.border_around} ${styles.lang}`}>FR</p>
                                    <p className={`${styles.lang}`}>EN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;