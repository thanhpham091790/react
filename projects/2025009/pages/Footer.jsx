import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import FooterLogo from "../assets/footer/footer-logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    <img src={FooterLogo} alt="Footer logo image" />
                </div>
                <div className="footer-text">
                    <p className="para">Welcome to Burger Company, where passion for exceptional food and genuine
                        hospitality come
                        together.
                        Our story is one of
                        dedication to crafting the perfect burger experience, from sourcing the finest ingredients to
                        delivering unparalleled
                        taste in every bite.</p>
                    <div className="contact">
                        <p className="para">
                            <FaLocationDot />
                            MG Road, Bangalore, 500089</p>
                        <p className="para">
                            <FaEnvelope />
                            info@burgerhouse.com</p>
                        <ul className="social">
                            <li>
                                <a className="social-link" href="#" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a className="social-link" href="#" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li><a className="social-link" href="#" aria-label="Tweeter">
                                <FaTwitter />
                            </a>
                            </li>
                            <li>
                                <a className="social-link" href="#" aria-label="Phone">
                                    <FaPhoneAlt />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="para">Copyright © 2024 Web Design Mastery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}