import React from 'react';
import Banner from '../Banner/Banner';
import Shop from '../../Shop/Shop';
import HomeItems from '../../InventoryItems/HomeItems/HomeItems';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Shop></Shop>
            <HomeItems></HomeItems>

        </div>
    );
};

export default Home;