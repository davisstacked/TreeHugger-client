import React from 'react';

import PhotoModel from '../../models/photo';

class EditPhotoContainer extends React.Component {
    state = {
        title: '',
        image: '',
        caption: '',
    }

    // Get the Photo (by ID) to be edited and update status
    componentDidMount() {
        PhotoModel.getPhotoById(this.props.match.params.id)
            .then((result) => this.setState(result))
            .catch((err) => console.log(err));
    }

    handleChange = (event) => {
       this.setState({[event.target.name]: event.target.value})
    };

    // Submit updated photo object to server to save in database
    handleSubmit = (event) => {
        event.preventDefault();
        PhotoModel.updatePhoto(this.state, this.props.match.params.id)
        .then((result) => {
            console.log(result);
        });
        this.props.history.push(`/photos/${this.props.match.params.id}`);
    };

    render() {
        const { title, image, caption } = this.state;
        console.log('in edit')
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <h2>Edit Photo</h2>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="title">Title</label>
                        <input className="form-control" type="text" name="title" id="title" value={title} onChange={this.handleChange} />
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="image">Image</label>
                        <input className="form-control" type="text" name="image" id="image" value={image} onChange={this.handleChange} />
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="caption">Caption</label>
                        <input className="form-control" type="text" name="caption" id="caption" value={caption} onChange={this.handleChange} />
                    </div>
                    <button className="form-control btn btn-success float-right" type="submit">Update Photo</button>
                </form>
            </div>
        )
    }
}


export default EditPhotoContainer;