import PropTypes from 'prop-types';

import Button from '../../Button';

function MenuItem({ title, icon, className }) {
    return (
        <Button className={className} leftIcon={icon}>
            <span>{title}</span>
        </Button>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
    className: PropTypes.string,
};

export default MenuItem;
