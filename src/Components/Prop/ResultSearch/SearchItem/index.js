import classNames from 'classnames/bind';
import styles from './SearchItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';

const cx = classNames.bind(styles);
function SearchItem({ content, account }) {
    return (
        <div className={cx('wrapper')}>
            {content ? (
                <Fragment>
                    <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    <span className={cx('content-result')}>hoa cỏ lau</span>
                </Fragment>
            ) : (
                <Fragment>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0b1d58fee5011827b610b33d694e6c51~c5_300x300.webp?x-expires=1691971200&x-signature=dtbkIIR58gx%2BHgs0cF0LaWhCQiA%3D"
                        alt="avatar"
                    />
                    <div className={cx('infor')}>
                        <h4 className={cx('userName')}>
                            <span>hoa_2309</span>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                        </h4>

                        <div className={cx('fullName')}>Ngô Ngọc Hòa</div>
                    </div>
                </Fragment>
            )}
        </div>
    );
}

export default SearchItem;
