import React from 'react';
import Photo from '../Photo/Photo';

import './PhotosList.css';

function PhotosList(props) {
    const photosList = props.photos.map((photo) => {
        // for list can change value to true or false to change what info shows up in a list view
        return <Photo key={photo._id} photo={photo} list={true} buttons={true}/>
    });

    return (
        <div className="photos-container">
            {photosList}
        </div>
    );
}

export default PhotosList;