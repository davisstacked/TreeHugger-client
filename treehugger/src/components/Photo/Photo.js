import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotoModel from '../../models/photo';

import './Photo.css';

function Photo (props) {
    const { photo, list } = props;

    const handleDelete = () => {
      console.log(photo._id)
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
        <section className="content-wrapper">
          <p>{photo.caption}</p>
          </section>
          <section className="content-wrapper">
          <button className='delete' onClick={handleDelete}>Delete</button>
          <button className='edit'><Link to={`/photos/${photo._id}/edit`} className='edit'>Edit</Link></button>
          </section>
        </div>
      )}
    </>
  );
}

export default withRouter(Photo);