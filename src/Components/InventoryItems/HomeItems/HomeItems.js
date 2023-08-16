import React, { useEffect, useState } from 'react';
import ItemsCard from '../ItemsCard/ItemsCard';

const HomeItems = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://assaginment-11.vercel.app/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div className=" grid grid-cols-3 gap-5">
                {
                    product.splice(3, 6).map(products => <ItemsCard
                        key={products._id}
                        products={products}
                        setProduct={setProduct}
                    ></ItemsCard>)
                }

            </div>
        </div>
    );
};

export default HomeItems;