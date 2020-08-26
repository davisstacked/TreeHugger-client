import React from 'react';
import { Link } from 'react-router-dom';

// import './User.css';

function User (props) {
    const { user } = props;

    return (
            <div className="user-card">
                <section className="title-wrapper">
                    <h4>{user.username}</h4>
                </section>
                <section className="image-wrapper">
                    <img src={user.image} alt={user.username} height="100" />
                </section>
                <section className="photo-wrapper">
                    <img src={user.photos} />
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