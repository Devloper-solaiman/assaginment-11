import React, { useEffect, useState } from 'react';
import AllItemsCard from './AllItemsCard';

const AllItems = () => {
    const [Allproduct, setAllProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setAllProduct(data))
    }, [])
    return (
        <div className=" grid grid-cols-3 gap-5">
            {
                Allproduct.map(product => <AllItemsCard
                    key={product._id}
                    product={product}
                    setAllProduct={setAllProduct}
                ></AllItemsCard>)
            }

        </div>
    );
};

export default AllItems;