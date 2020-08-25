import React from 'react';
import Photo from '../Photo/Photo';

import './PhotosList.css';

function PhotosList(props) {
    const photosList = props.photos.map((photo) => {
        return <Photo key={photo._id} photo={photo} list={true} />
    });

    return (
        <div className="photos-container">
            {photosList}
        </div>
    );
}

export default PhotosList;