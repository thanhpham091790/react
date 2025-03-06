import HeaderLogo from "../assets/header/header-logo.png";
import HeaderHero from "../assets/header/header-hero.png";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="menu-bar">
                    <div className="header-logo">
                        <img src={HeaderLogo} alt="Header logo image" />
                    </div>
                    <div className="open-menu" id="open-menu"><i className="fa-solid fa-bars"></i></div>
                    <div className="menu" id="menu">
                        <div className="close-menu" id="close-menu"><i className="fa-solid fa-x"></i></div>
                        <nav className="nav">
                            <ul className="navlink">
                                <li><a className="link" href="#">Home</a></li>
                                <li><a className="link" href="#">Special</a></li>
                                <li><a className="link" href="#">Menu</a></li>
                                <li><a className="link" href="#">Event</a></li>
                                <li><a className="link" href="#">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="text">It is good time for the greate taste of burger</p>
                        <h1 className="heading">Burger Week</h1>
                    </div>
                    <div className="hero-img">
                        <img src={HeaderHero} alt="Hero Image" />
                    </div>
                </div>
            </div>
        </header>
    );
}
