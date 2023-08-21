import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Image({ src, alt, fallback: CustomFallback = images.noImage, className, ...props }) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(CustomFallback);
    };

    return (
        <img
            className={cx('wrapper', { className })}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default Image;
