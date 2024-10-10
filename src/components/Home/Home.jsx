import React from 'react';
import Banner from '../Banner/Banner';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import Categories from './../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <FeatureJobs />
        </div>
    );
};

export default Home;