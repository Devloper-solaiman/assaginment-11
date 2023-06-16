import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Shop from '../Shop/Shop';
import InventoryPage from '../InventoryPage/InventoryPage';
import Footer from '../Shared/Footer';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Shop></Shop>
            <InventoryPage></InventoryPage>
            <Footer></Footer>

        </div>
    );
};

export default Home;