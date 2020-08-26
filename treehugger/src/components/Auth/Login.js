import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Login extends Component {
    state = {
        username: '',
        password: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // Make sure your login route has a submit function so we can store that info: 
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/auth/login`, this.state)
        .then((res) => {
            console.log(res.data);
            localStorage.setItem('id', res.data.id)
            this.props.setCurrentUser(res.data.token);
            this.props.history.push(`/users/${res.data.id}`);
        })
        .catch((err) => {
            console.log(err.response.status);
            console.log(err.response.data);
            console.log(err.response.data.message);
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <input onChange={this.handleChange} type="username" id="username" name="username" value={this.state.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} />
                </div>
                <button className="btn btn-primary float-right" type="submit">Login</button>
            </form>
        )
    }
};

export default withRouter(Login);