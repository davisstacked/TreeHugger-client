import React from 'react';
import { Link } from 'react-router-dom';

import './User.css';

function User (props) {
    const { user } = props;
    console.log(user)
    const photos = []
    if (user.photos) {
        for (let i=0; i < user.photos.length; i++) {
            photos.push(<Link to={`/photos/${user.photos[i]._id}`}><img className="fotos" src={user.photos[i].image} height="200" /></Link>)
      }
    }
    return (
            <div className="user-card">
                <section className="profile-image-wrapper">
                    <img className="profile-photo" src={user.image} alt={user.username} height="300" />
                </section>
                <section className="username-wrapper">
                    <h1><strong>{user.username}</strong></h1>
                </section>
                <Link to={`/photos/new`}>
            <button>Add Photos</button>
                </Link>
                <section className="profile-photos-wrapper">
                    { photos } 
                </section>
            </div>
       
    );
}

export default User;