import React from 'react';
import Blogs from '../../Blogs/Blogs';
import Banner from '../Banner/Banner';
import Prices from '../Prices/Prices';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Prices></Prices>
            
        </div>
    );
};

export default Home;