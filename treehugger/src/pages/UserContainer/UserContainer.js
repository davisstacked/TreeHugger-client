import React from 'react';
import User from '../../components/User/User';
import UserModel from '../../models/user';


class UserContainer extends React.Component {
    state = {
        user: {},
    };

    componentDidMount() {
        UserModel.getUserById(this.props.match.params.id)
        .then((result) => {
            this.setState({user: result})
            console.log(result)
        })
        .catch((err) => console.log(err))
    }

    render() {
        console.log(this.props);
        return <User user={this.state.user} list={false} />;
    }
}

export default UserContainer;

