
import PropTypes from "prop-types";

function Image({ src, alt }) {
    return (
        <>
            <div className="image">
                <img src={src} alt={alt} />
            </div>
        </>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Image;