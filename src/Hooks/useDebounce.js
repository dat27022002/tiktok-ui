import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
    const [deboune, setDebounce] = useState(value);

    useEffect(() => {
        const _time = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => clearTimeout(_time);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return deboune;
};
