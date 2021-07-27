import React, { useState } from 'react';
import Search from '../../static/icons/Search.jsx';
import "./styles.scss";

const Banner = () => {

    const [search, setSearch] = useState("");
    const [check, setCheck] = useState(false);

    const changeSearch = ({ target: { value } }) => {
        if(value.length < 1){
            setCheck(false);
            return;
        }
        setSearch(value);
        setCheck(true)
    }

    const handleSearch = async() => {

        const key = "22663718-09603ea9170fb559d2ac14e1a";
        const url = `https://pixabay.com/api/?key=${key}&q=${search}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

    };

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
