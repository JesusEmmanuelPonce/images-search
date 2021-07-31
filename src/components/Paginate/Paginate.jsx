import React, { useState } from 'react';
import { connect } from 'react-redux';
import ChevronLeft from '../../static/icons/ChevronLeft';
import ChevronRight from '../../static/icons/ChevronRight';
import "./styles.scss";

const Paginate = ({ totalPages }) => {

    const [page, setPage] = useState(1);

    const nextPage = () => {
        setPage(prevState => (prevState + 1))
    }

    const prevPage = () => {
        setPage(prevState => (prevState - 1))
    }

    return (
        <div className="paginate-wrap">
            <ul>
                <li>
                    <button
                        onClick={prevPage}
                    >
                        <ChevronLeft />
                    </button>
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
                    <button
                        onClick={nextPage}
                    >
                        <ChevronRight />
                    </button>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = ({ search }) => ({
    totalPages: search?.totalPages ?? 0,
});

export default connect(mapStateToProps)(Paginate);
