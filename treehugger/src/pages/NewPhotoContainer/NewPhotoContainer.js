import React from 'react';
import { withRouter } from 'react-router-dom';
import PhotoModel from '../../models/photo';


class NewPhotoContainer extends React.Component {
    state = {
        title: '',
        image: '',
        caption: '',
    }

    handleChange = (event) => {
        //console.log(event.target.id);
        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = (event) => {
        event.PreventDefault();
        PhotoModel.createPhoto(this.state)
            .then((result) => {
                console.log(result);
            });
            // Redirect to Photos Index (history comes from react-router-dom)
        // this.props.history.push('/photos');
        this.props.history.push('/users/id');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Add a New Photo</h2>
                    <div>
                        <label htmlFor="">Title</label>
                        <input onInput={this.handleChange} type="text" name="title" />
                    </div>
                    <div>
                        <label htmlFor="">Image</label>
                        <input onInput={this.handleChange} type="text" name="image" />
                    </div>
                    <div>
                        <label htmlFor="">Caption</label>
                        <input onInput={this.handleChange} type="text" name="caption" /> 
                    </div>
                    <button type="submit">Add Photo</button>
                </form>
            </div>
        );
    }
}

export default withRouter(NewPhotoContainer);