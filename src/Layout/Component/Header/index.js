import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarth,
    faCircleQuestion,
    faMoon,
    faKeyboard,
    faCoins,
    faGear,
    faUser,
    faBookmark,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from './Search';
import Button from '~/Components/Button';
import Menu from '~/Components/Prop/Menu';
import { MailboxIcon, MessengerIcon } from '~/Components/Icons';
import Image from '~/Components/Image';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: faEarth,
        title: 'Tiếng việt',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'VietNamese',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English',
                            },
                            {
                                code: 'vi',
                                title: 'VietNamese',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: faCircleQuestion,
        title: 'Phản hồi và trợ giúp',
        to: './feedback',
    },
    {
        icon: faKeyboard,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: faMoon,
        title: 'Chế độ tối',
        button: 'hêlo',
    },
];

const MENU_USER = [
    {
        icon: faUser,
        title: 'View profile',
        to: './user',
    },
    {
        icon: faBookmark,
        title: 'Favorites',
        to: './user',
    },
    {
        icon: faCoins,
        title: 'Get Coins',
        to: './coin',
    },
    {
        icon: faGear,
        title: 'Settings',
        to: './setting',
    },
    ...MENU_ITEMS,
    {
        icon: faArrowRightFromBracket,
        title: 'Log out',
        to: './',
        topSeparate: true,
    },
];

const currentUser = true;
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="titok"></img>
                </div>

                <Search />

                {/* action */}
                <div className={cx('action')}>
                    <Button className={cx('upload')} borderDark leftIcon={faPlus}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <div className={cx('icon')}>
                                    <MessengerIcon />
                                </div>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <div className={cx('icon', 'inbox')}>
                                    <MailboxIcon width="3.2rem" height="3.2rem" />
                                </div>
                            </Tippy>

                            <Menu className="menu-list" data={MENU_USER}>
                                <div className={cx('avatar')}>
                                    <Image
                                        src="https://haycafe.vn/wp-content/uploads/2022/10/Hinh-anh-gai-xinh-Viet-Nam-cuoi-tuoi-tan.jpg"
                                        alt="avatar"
                                    />
                                </div>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng nhập</Button>
                            <Menu className="menu-list" data={MENU_ITEMS}>
                                <span className={cx('more')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </span>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
