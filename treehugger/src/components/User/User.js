import React from 'react';
import { Link } from 'react-router-dom';

// import './User.css';

function User (props) {
    const { user } = props;
    console.log(user)
    const photos = []
    if (user.photos) {
        for (let i=0; i < user.photos.length; i++) {
            photos.push(<a href="/photos/{user.photos[i]._id}"> <img src={user.photos[i].image} height="200" /></a>)
      }
    }
    return (
            <div className="user-card">
                <section className="title-wrapper">
                    <h4>{user.username}</h4>
                </section>
                <section className="image-wrapper">
                    <img src={user.image} alt={user.username} height="300" />
                </section>
                <section className="photo-wrapper">
                    {/* <img src={user.photos} /> */}
                    { photos }
                </section>
                <Link to={`/photos/new`}>
            <button>Add Photos</button>
                </Link>
                <Link to={`/photos/edit`}>
            <button>Edit Photos</button>
                </Link>
            </div>
       
    );
}

export default User;