
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer id="group9">
            <div className="content">
                <div className="col" id="col1">
                    <h4>Title Here</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga cupiditate dignissimos illo suscipit
                        ratione minus necessitatibus perferendis. Tenetur, repudiandae asperiores.</p>
                    <div className="social">
                        <a href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="Whatsapp">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
                <div className="col" id="col2">
                    <h4>About</h4>
                    <ul>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Brand Guidelines</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="col" id="col3">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">How to Order</a></li>
                        <li><a href="#">Our Product</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Promo</a></li>
                        <li><a href="#">Payment Method</a></li>
                    </ul>
                </div>
                <div className="col" id="col4">
                    <h4>Other</h4>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;