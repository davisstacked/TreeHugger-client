const url = `http://localhost:4000/api/v1/users`
const token = localStorage.getItem('token');


class UserModel {
    static getAllUsers = () => {
        return fetch(url)
        .then((response) => response.json())
    }

    static getUserById = (userId) => {
        return fetch(`${url}/${userId}`)
        .then((response) => response.json())
    }

    static createUser = (user) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token,
            },
            body: JSON.stringify(user)
        })
        .then((response) => response.json())
    }
}



export default UserModel;