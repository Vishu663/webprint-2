import PropTypes from 'prop-types'; // Import PropTypes
import './Card.css';

export default function Card(props) {
    const { ctype, children } = props;

    return (
        <div className={ctype}>
            {children}
        </div>
    );
}

// Define PropTypes validation
Card.propTypes = {
    ctype: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};
