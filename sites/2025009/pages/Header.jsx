import React from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

function Header() {
    let style = null;

    const isMobile = useMediaQuery({
        query: '(max-width: 992px)'
    });

    const [on, setOn] = React.useState(false);

    function open() {
        setOn(true);
    }

    function close() {
        setOn(false);
    }

    if (isMobile) {
        style = on === true ? { transform: "translateX(0)" } : { transform: "translateX(100%)" };
    }


    return (
        <>
            <header id="group1">
                <div className="toolbar">
                    <div className="logo">
                        <a href="index.html">
                            <img src="/2025009/assets/group1/logo.png" alt="Your Logo" />
                        </a>
                    </div>

                    <div id="open" className="open" onClick={open}>
                        <FaBars />
                    </div>

                    <nav id="nav" style={style}>
                        <div id="close" className="close" onClick={close}>
                            <IoClose />
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Promo</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="text">
                    <h1>Get Cashback up to 50%</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam consequatur repudiandae aut
                        excepturi.</p>
                    <button type="button">Order Now</button>
                </div>
            </header>
        </>
    );
}

export default Header;