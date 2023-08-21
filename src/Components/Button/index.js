import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({
    children,
    primary,
    borderDark,
    large,
    medium,
    borderPrimary,
    rounded,
    topSeparate,
    leftIcon,
    rightIcon,
    className,
    to,
    href,
    ...passProps
}) {
    let Comp = 'button';

    let Props = {
        ...passProps,
    };

    if (to) {
        Props.to = to;
        Comp = Link;
    } else if (href) {
        Props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        borderDark,
        large,
        medium,
        borderPrimary,
        rounded,
        topSeparate,
        [className]: className,
    });

    return (
        <Comp className={classes} {...Props}>
            {leftIcon && <FontAwesomeIcon className={cx('leftIcon')} icon={leftIcon} />}
            {children}
            {rightIcon && <FontAwesomeIcon className={cx('rightIcon')} icon={leftIcon} />}
        </Comp>
    );
}

export default Button;
