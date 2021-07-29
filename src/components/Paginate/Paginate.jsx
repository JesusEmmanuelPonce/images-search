import React from 'react';
import ChevronLeft from '../../static/icons/ChevronLeft';
import ChevronRight from '../../static/icons/ChevronRight';
import "./styles.scss";

const Paginate = () => {
    return (
        <div className="paginate-wrap">
            <ul>
                <li>
                    <button><ChevronLeft /></button>
                </li>
                <li>
                    <button className="active">1</button>
                </li>
                <li>
                    <button>2</button>
                </li>
                <li>
                    <button>3</button>
                </li>
                <li>
                    <button><ChevronRight /></button>
                </li>
            </ul>
        </div>
    )
}

export default Paginate;
