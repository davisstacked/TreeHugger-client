import React from 'react';
import { Link } from 'react-router-dom';

// import './User.css';

function User (props) {
    const { user } = props;

    return (
        <Link to={`/users/${user._id}`}>
            <div className="user-card">
                <section className="title-wrapper">
                    <h4>{user.username}</h4>
                </section>
                <section className="image-wrapper">
                    <img src={user.image} alt={user.title} height="100" />
                </section>
            </div>
        </Link>
    );
}

export default User;