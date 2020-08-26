import React from 'react';

import clouds from './images/clouds.jpg'
import trees from './images/trees.jpg'
import mountains from './images/mountains.jpg'

function Carosel () {
    return(
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={mountains} class="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
            <img src={clouds} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
            <img src={trees}className="d-block w-100" alt="..." />
        </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
        </a>
        </div>
    )
}

export default Carosel;