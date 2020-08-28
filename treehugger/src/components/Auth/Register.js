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
                <div className="form-group row">
                    <label className="col-form-label" htmlFor="username">Username</label>
                    <input className="form-control" onChange={this.handleChange} type="text" id="username" name="username" value={this.state.username} />
                </div>
                <div className="form-group row">
                    <label className="col-form-label" htmlFor="image">Profile Photo</label>
                    <input className="form-control" onChange={this.handleChange} type="text" id="image" name="image" value={this.state.image} />
                </div>
                <div className="form-group row">
                    <label className="col-form-label" htmlFor="password">Password</label>
                    <input className="form-control" onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} />
                </div>
                <div className="form-group row">
                    <div className="col-sm-2 col-form-label">
                        <button className="form-control btn btn-success float-right" type="submit">Register</button>
                    </div>
                </div>
            </form>
        )
    }
};

export default (Register);