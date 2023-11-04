import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { Wrapper } from '~/Components/Prop';
import styles from './Menu.module.scss';
import Button from '~/Components/Button';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, data }) {
    const [history, setHistory] = useState([{ data: data }]);
    const current = history[history.length - 1];

    const handleClick = (item) => {
        const parrent = !!item.children;
        if (parrent) {
            setHistory((prev) => [...prev, item.children]);
        }
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderMenuList = (data) => {
        return data.map((item, index) => {
            return (
                <Button
                    to={item.to}
                    key={index}
                    className={cx('menu-item', {
                        menuLevel2: history.length > 1,
                    })}
                    leftIcon={item.icon}
                    onClick={() => handleClick(item)}
                    topSeparate={item.topSeparate}
                >
                    <span>{item.title}</span>
                </Button>
            );
        });
    };

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this
        //by creating a new parentNode context.
        <div>
            <Tippy
                render={(attrs) => (
                    <Wrapper tabIndex="-1" {...attrs}>
                        {current.title && <Header onBack={handleBack}>{current.title}</Header>}
                        <div className={cx('menu-list')}>{renderMenuList(current.data)}</div>
                    </Wrapper>
                )}
                interactive
                placement="bottom-end"
                delay={[0, 700]}
                onHide={() => {
                    setHistory((prev) => prev.slice(0, 1));
                }}
                hideOnClick={false}
            >
                {children}
            </Tippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.object.isRequired,
};

export default Menu;
