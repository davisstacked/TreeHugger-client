import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotoModel from '../../models/photo';

import './Photo.css';

function Photo (props) {
    const { photo, list } = props;

    const handleDelete = () => {
        PhotoModel.deletePhoto(photo._id)
        .then((result) => props.history.push('/photos'))  
        .catch((err) => console.log(err));
    };


return (
    <>
      <div className="photo-card" style={!list ? {margin: '0 auto'} : {}}>
        <section className="image-wrapper">
        <Link to={`/photos/${photo._id}`}><img src={photo.image} alt={photo.title} height="100" /></Link>
        </section>
      </div>
      {!list && (
        <div className='photo-card-actions'>
        <section className="content-wrapper">
          <h4>{photo.title}</h4>
        </section>
          <p><strong>Caption: </strong> {photo.caption}</p>
          <button className='delete' onClick={handleDelete}>Delete</button>
          <Link to={`/photos/${photo._id}/edit`} className='edit'>Edit</Link>
        </div>
      )}
    </>
  );
}

export default withRouter(Photo);

