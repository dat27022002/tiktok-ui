import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { search } from '~/service/searchService';

import styles from './Search.module.scss';
import { Wrapper as PropWrapper } from '~/Components/Prop';
import SearchResult from '~/Components/Prop/ResultSearch';
import { useDebounce } from '~/Hooks/useDebounce';

const cx = classNames.bind(styles);

function Search() {
    const [valueInput, setValueInput] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    const [showResultSearch, setShowResultSearch] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(valueInput, 500);

    useEffect(() => {
        if (debounce.trim().length === 0) {
            setResultSearch([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            const res = await search(debounce);
            setResultSearch(res.data);
            setLoading(false);
        };

        fetchApi();

        // getSearch('users/search', {
        //     params: {
        //         q: debounce,
        //         type: 'less',
        //     },
        // })
        //     .then((res) => {
        //         setResultSearch(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });
    }, [debounce]);

    const inpuRef = useRef();

    const handleClickClear = () => {
        setValueInput('');
        inpuRef.current.focus();
    };

    const handleChange = (e) => {
        if (!e.target.value.startsWith(' ')) {
            setValueInput(e.target.value);
        }
    };

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this
        //by creating a new parentNode context.
        <div>
            <TippyHeadless
                render={(attrs) => (
                    <div>
                        <PropWrapper tabIndex="-1" {...attrs}>
                            <SearchResult data={resultSearch} valueInput={valueInput} />
                        </PropWrapper>
                    </div>
                )}
                interactive
                visible={resultSearch.length > 0 && showResultSearch}
                onClickOutside={() => {
                    setShowResultSearch(false);
                }}
            >
                <div className={cx('search')}>
                    <input
                        placeholder="Please enter"
                        value={valueInput}
                        ref={inpuRef}
                        onChange={handleChange}
                        onFocus={() => {
                            setShowResultSearch(true);
                        }}
                    ></input>

                    {valueInput && !loading && (
                        <button className={cx('clear-btn')} onClick={handleClickClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <span className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </span>
                    )}

                    <span className={cx('spacer')}></span>

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
