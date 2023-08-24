import classNames from 'classnames/bind';
import styles from './SearchItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';

const cx = classNames.bind(styles);
function SearchItem({ content, account, data }) {
    return (
        <div className={cx('wrapper')}>
            {content ? (
                <Fragment>
                    <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    <span className={cx('content-result')}>hoa cỏ lau</span>
                </Fragment>
            ) : (
                <Fragment>
                    <img className={cx('avatar')} src={data.avatar} alt="avatar" />
                    <div className={cx('infor')}>
                        <h4 className={cx('userName')}>
                            <span>{data.nickname}</span>
                            {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
                        </h4>

                        <div className={cx('fullName')}>{data.full_name}</div>
                    </div>
                </Fragment>
            )}
        </div>
    );
}

export default SearchItem;
