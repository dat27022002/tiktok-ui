import classNames from 'classnames/bind';
import Header from '~/Components/Layout/Component/Header';
import Sidebar from './Sidebar';

import styles from './Defaut.module.scss';

const cx = classNames.bind(styles);

function Defautlayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default Defautlayout;
