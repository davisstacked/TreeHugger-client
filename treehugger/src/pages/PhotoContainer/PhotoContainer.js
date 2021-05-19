import React from 'react';
import Photo from '../../components/Photo/Photo';
import PhotoModel from '../../models/photo';


class PhotoContainer extends React.Component {
    state = {
        photo: {},
    };

    componentDidMount() {
        // Get All Photos
        PhotoModel.getPhotoById(this.props.match.params.id)
            .then((result) => {
                console.log('photodata', result);
                this.setState({photo: result})
            })
            .catch((err) => console.log(err)) 
    }

    render() {
        return <Photo photo={this.state.photo} list={false} buttons={true}/>
    }
}

export default PhotoContainer;