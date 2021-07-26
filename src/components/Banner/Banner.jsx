import React from 'react';
import Search from '../../static/icons/Search.jsx';
import "./styles.scss";

const Banner = () => {
    return (
        <div className="banner-wrap">
            <div className="input-wrap">
                <input
                    autoComplete="off"
                    type="text"
                    placeholder="Buscar imagen"
                />
                <button>
                    <Search />
                </button>
            </div>
        </div>
    )
}

export default Banner
