import React from 'react';
import { connect } from 'react-redux';
import isValidArray from '../../helpers/isValidArray';
import Comment from '../../static/icons/Comment';
import ThumbUp from '../../static/icons/ThumbUp';

import "./styles.scss";

const Images = ({ allImages }) => {

    return (
        <div className="container mt-5">
            <div className="row">
                { isValidArray(allImages.hits) && allImages.hits.map(image => (
                    <div
                        className="col-md-6 col-lg-4 mb-3"
                        key={image.id}
                    >
                        <div
                            id="image-card"
                            className="card"
                        >
                            <img
                                src={image.previewURL}
                                className="card-img-top image-picture"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="mb-1">
                                    <span className="thumb">
                                        <ThumbUp />
                                    </span>
                                    { image.likes }
                                </p>
                                <p className="mb-1">
                                    <span className="comment">
                                        <Comment />
                                    </span>
                                    { image.likes }
                                </p>
                                <p>
                                    <span>Vistas: { image.views }</span>
                                </p>
                                <a
                                    href={ image.largeImageURL }
                                    target="_blank"
                                    className="d-block mt-3"
                                    rel="noopener noreferrer"
                                >Ver Imagen</a>
                            </div>
                        </div>
                    </div>
                ))}    
            </div>
        </div>
    )
};

const mapStateToProps = ({ search }) => ({
    allImages: search?.allImages
})

export default connect(mapStateToProps)(Images)
