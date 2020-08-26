import React from 'react';
import { Link } from 'react-router-dom';

// import './Photo.css';

function Photo (props) {
    const { photo, list } = props;

    return (
        <Link to={`/photos/${photo._id}`}>
            <div className="photo-card">
                <section className="title-wrapper">
                    {!list && (
                        <h4>{photo.title}</h4>
                    )}
                </section>
                <section className="image-wrapper">
                    <img src={photo.image} alt={photo.title} height="100" />
                </section>
                <section className="content-wrapper">
                    {! list && (
                        <p>{photo.caption}</p>
                    )}
                </section>
            </div>
        </Link>
    );
}

export default Photo;