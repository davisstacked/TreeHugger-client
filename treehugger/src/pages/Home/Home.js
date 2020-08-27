import React from 'react';
import Carosel from '../../components/Carosel/Carosel';
import HomeContent from '../../components/HomeContent/HomeContent';




const Home = () => {
    return (
        <div className="home-body">
                
                    <h1>We're happy you're here.</h1>
                    <Carosel />
                    <HomeContent />
                    
        </div>
    );
}

export default Home;