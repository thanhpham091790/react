

import PropTypes from 'prop-types';
function Burger({ id, reserve, children }) {
    const rowReverseClass = reserve === true ? "row-reverse" : null;
    return (
        <>
            <section id={id} className={rowReverseClass}>
                {children}
            </section>
        </>
    )
}

Burger.propTypes = {
    id: PropTypes.string.isRequired,
    reserve: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default Burger;