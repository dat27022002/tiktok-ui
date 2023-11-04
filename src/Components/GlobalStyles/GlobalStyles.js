import PropTypes from 'prop-types';
import '~/Components/GlobalStyles/GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node,
};

export default GlobalStyles;
