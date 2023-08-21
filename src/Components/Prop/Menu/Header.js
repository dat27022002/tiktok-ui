import classNames from 'classnames/bind';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Header({ children , onBack}) {
    return (
        <header className={cx('header')}>
            <FontAwesomeIcon onClick={onBack} className={cx('back-btn')} icon={faChevronLeft} />
            <h4>{children}</h4>
        </header>
    );
}

export default Header;
