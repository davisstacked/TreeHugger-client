const url = `http://localhost:4000/api/v1/photos`
const token = localStorage.getItem('token');

class PhotoModel {
    static getAllPhotos = () => {
        return fetch(url)
        .then((response) => response.json())
    }

    static getPhotoById = (photoId) => {
        return fetch(`${url}/${photoId}`)
        .then((response) => response.json())
    }

    static createPhoto = (photo, userId) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token'),
            },
            body: JSON.stringify({ photo, userId })
        })
            .then((response) => response.json())
    }

    static updatePhoto = (photo, id) => {
        return fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token'),
            },
            body: JSON.stringify(photo)
        })
            .then((response) => response.json())
    }
    

      static deletePhoto = (id) => {
        return fetch(`${url}/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token'),
          },
        })
          .then((response) => response.json())
      }
    }




export default PhotoModel;