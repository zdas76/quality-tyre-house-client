import React from 'react';
import AboutUs from './AboutUs';
import Brands from './Brands';
import BusinesSummary from './BusinesSummary';
import Carousel from './Carousel';
import CustReview from './CustReview';
import HomeProduct from './HomeProduct';

const Home = () => {
    return (
        <div className='my-5'>
            <Carousel></Carousel>
            <HomeProduct></HomeProduct>
            <BusinesSummary></BusinesSummary>
            <Brands></Brands>
            <AboutUs></AboutUs>
            <CustReview></CustReview>
        </div>
    );
};

export default Home;