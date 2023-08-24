import classNames from 'classnames/bind';
import { Fragment } from 'react';

import styles from './SearchResult.module.scss';
import SearchItem from './SearchItem';

const cx = classNames.bind(styles);
function SearchResult({ data, valueInput }) {
    return (
        <Fragment>
            <SearchItem content />
            <SearchItem content />
            <div className={cx('header-list-account')}>Tài khoản</div>
            {data.map((item) => (
                <SearchItem account key={item.id} data={item} />
            ))}
            <div className={cx('footer-result-search')}>Xem tất cả kết quả dành cho "{valueInput}"</div>
        </Fragment>
    );
}

export default SearchResult;
