import React from 'react';
import Photo from '../Photo/Photo';

import './PhotosList.css';

function PhotosList(props) {
    const photosList = props.photos.map((photoObj) => {
        return <Photo key={photoObj._id} photo={photoObj} list={true} />
    });

    return (
        <div className="photos-container">
            {photosList}
        </div>
    );
}

export default PhotosList;