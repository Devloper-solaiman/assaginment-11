import React, { useEffect, useState } from 'react';
import InventoryService from '../Inventory/InventoryService';

const InventoryPage = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div className=" grid grid-cols-3 gap-2">
                {
                    product.splice(3, 6).map(products => <InventoryService
                        key={products._id}
                        products={products}
                        setProduct={setProduct}
                    ></InventoryService>)
                }

            </div>
        </div>
    );
};

export default InventoryPage;