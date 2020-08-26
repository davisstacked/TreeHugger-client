import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Register extends Component {
    state = {
        username: '',
        password: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/auth/register`, this.state)
            .then((res) => {
                console.log(res);
                this.props.history.push('/login');
            })
            .catch((err) => {
                console.log(err.response.status);
                console.log(err.response.data);
                console.log(err.response.data.message);
            });
    }

    render() {
        console.log(this.props);
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={this.handleChange} type="text" id="username" name="username" value={this.state.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Profile Photo</label>
                    <input onChange={this.handleChange} type="text" id="image" name="image" value={this.state.image} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} />
                </div>
                <button className="btn btn-primary float-right" type="submit">Register</button>
            </form>
        )
    }
};

export default (Register);