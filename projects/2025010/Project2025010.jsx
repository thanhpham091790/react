import "./Project2025010.css";
import "./assets/fonts/fonts.css";

function Project2025010() {
    return (
        <div id="simple-landing-page">
            <div className="simple-landing-page">
                <div className="hero">
                    <h1 className="heading">
                        Got marketing? advance your business insight.
                    </h1>
                    <p className="text">Fill out the form and receive our award winning newsletter.</p>
                </div>
                <div className="form">
                    <div className="wrapper">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div className="wrapper">
                        <button type="button">Sign me up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project2025010;