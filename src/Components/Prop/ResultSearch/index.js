import classNames from 'classnames/bind';
import { Fragment } from 'react';

import styles from './SearchResult.module.scss';
import SearchItem from './SearchItem';

const cx = classNames.bind(styles);
function SearchResult() {
    return (
        <Fragment>
            <SearchItem content />
            <SearchItem content />
            <div className={cx('header-list-account')}>Tài khoản</div>
            <SearchItem account />
            <SearchItem account />
            <SearchItem account />
            <div className={cx('footer-result-search')}>Xem tất cả kết quả dành cho "đỗ"</div>
        </Fragment>
    );
}

export default SearchResult;
