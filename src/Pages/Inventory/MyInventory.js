import React, { useEffect, useState } from 'react';

import InventoryService from './InventoryService';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MyInventory = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <>
            <Navbar></Navbar>
            <div className=" grid grid-cols-3 gap-4">
                {
                    product.map(products => <InventoryService
                        key={products._id}
                        products={products}
                        setProduct={setProduct}
                    ></InventoryService>)
                }
            </div>

            <Footer></Footer>
        </>
    );
};

export default MyInventory;