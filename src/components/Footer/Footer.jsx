
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="social-icons">
                <img src="instagram.png" alt="Instagram" />
                <img src="twitter.png" alt="Twitter" />
                <img src="linkedin.png" alt="LinkedIn" />
                <img src="slack.png" alt="Slack" />
                <img src="email.png" alt="Email" />
                <img src="youtube.png" alt="YouTube" />
            </div>
            <div className="contact-info">
                <p>تلفن تماس : 09150420447</p>
                <p>آدرس : مشهد، بلوار سجاد، بین 15 و13</p>
                <a href="mailto:salam@joorchin.co">ایمیل : salam@joorchin.co</a>
            </div>
            <div className="description">
                <p>برای دریافت جدیدترین اخبار و تخفیفات عضو خبرنامه شوید</p>
            </div>
        </div>
    );
};

export default Footer;
