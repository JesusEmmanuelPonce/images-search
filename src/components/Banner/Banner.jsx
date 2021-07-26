import React, { useState } from 'react';
import Search from '../../static/icons/Search.jsx';
import "./styles.scss";

const Banner = () => {

    const [search, setSearch] = useState("");
    const [check, setCheck] = useState(false);

    const handleSearch = () => {
        
    }

    const changeSearch = ({ target: { value } }) => {
        if(value.length < 1){
            setCheck(false);
            return;
        }
        setSearch(value);
        setCheck(true)
    }

    return (
        <div className="banner-wrap">
            <div className="input-wrap">
                <input
                    autoComplete="off"
                    type="text"
                    placeholder="Buscar imagen"
                    onChange={changeSearch}
                />
                <button
                    type="button"
                    onClick={handleSearch}
                    disabled={!check}
                >
                    <Search />
                </button>
            </div>
        </div>
    )
}

export default Banner
