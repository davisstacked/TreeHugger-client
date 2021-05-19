import React from 'react';
import PhotosList from '../../components/PhotosList/PhotosList';
import PhotoModel from '../../models/photo';


class PhotoListContainer extends React.Component {
    state = {
        photos: [],
    };

    componentDidMount() {
        // Get all Photos
        PhotoModel.getAllPhotos()
        .then((result) => {
            // console.log(result);
            this.setState({photos: result});
        })
        .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Community Photos</h1>
                <PhotosList photos={this.state.photos} />
            </div>
        )
        
    }
}

export default PhotoListContainer;