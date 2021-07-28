import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import qs from 'qs';

import Search from '../../static/icons/Search.jsx';
import SliderV from '../../static/icons/SliderV.jsx';
import {
    SetSearchAction,
    GetImagesAction,
} from '../../redux/actions/searchAction.js';
import "./styles.scss";
import Waves from '../../static/icons/Waves.jsx';

const Banner = ({
    search,
    GetImagesAction,
    SetSearchAction,
}) => {

    const changeSearch = ({ target: { name, value } }) => SetSearchAction({ [name]: value });

    const handleSearch = async() => {

        const queries = qs.stringify(search);

        const key = "22663718-09603ea9170fb559d2ac14e1a";
        const url = `https://pixabay.com/api/?key=${key}&${queries}`;

        const response = await fetch(url);
        const data = await response.json();

        GetImagesAction(data);

    };

    console.log({search});

    return (
        <>
            <div className="banner-wrap">
                <div className="input-wrap">
                    <input
                        name="q"
                        autoComplete="off"
                        type="text"
                        placeholder="Buscar imagen"
                        onChange={changeSearch}
                    />
                    <button
                        className="btn-slider"
                        type="button"
                    >
                        <SliderV />
                    </button>
                    <button
                        className="btn-search"
                        type="button"
                        onClick={handleSearch}
                    >
                        <Search />
                    </button>
                </div>
                <div className="options-wrap">
                    <ul>
                        <li>
                            <select
                                name="lang"
                                onChange={changeSearch}
                            >
                                <option value="">Idioma</option>
                                <option value="es">Español</option>
                                <option value="en">Ingles</option>
                                <option value="fr">Frances</option>
                            </select>
                        </li>
                        <li>
                            <select
                                name="orientation"
                                onChange={changeSearch}
                            >
                                <option value="">Orientacion</option>
                                <option value="all">Todo</option>
                                <option value="horizontal">Horizontal</option>
                                <option value="vertical">Vertical</option>
                            </select>
                        </li>
                        <li>
                            <select
                                name="category"
                                onChange={changeSearch}
                            >
                                <option value="">Categoría</option>
                                <option value="backgrounds"></option>
                                <option value="fashion">Moda</option>
                                <option value="nature">Naturaleza</option>
                                <option value="science">Ciencia</option>
                                <option value="education">Educación</option>
                                <option value="health">Salud</option>
                                <option value="people">Gente</option>
                                <option value="religion">Religion</option>
                                <option value="places">Lugares</option>
                                <option value="animals">Animales</option>
                                <option value="industry">Industria</option>
                                <option value="computer">Computadoras</option>
                                <option value="food">Comida</option>
                                <option value="sports">Deportes</option>
                                <option value="transportation">Transporte</option>
                                <option value="travel">Viajes</option>
                                <option value="buildings">Edificios</option>
                                <option value="business">Negocios</option>
                                <option value="music">Musica</option>
                            </select>
                        </li>
                        <li>
                            <select
                                name="colors"
                                onChange={changeSearch}
                            >
                                <option value="">Color</option>
                                <option value="grayscale">Escalas grises</option>
                                <option value="transparent">Transparencia</option>
                                <option value="red">Rojo</option>
                                <option value="orange">Naranja</option>
                                <option value="yellow">Amarillo</option>
                                <option value="green">Verde</option>
                                <option value="turquoise">Turquesa</option>
                                <option value="blue">Azul</option>
                                <option value="lilac">Lila</option>
                                <option value="pink">Rosa</option>
                                <option value="white">Blanco</option>
                                <option value="gray">Gris</option>
                                <option value="black">Negro</option>
                                <option value="brown">Cafe</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <Waves className="waves" />
        </>
    )
}

const mapStateToProps = ({ search }) => ({
    search: search?.search ?? {},
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators ({
        SetSearchAction,
        GetImagesAction,
    }, dispatch )
)

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
