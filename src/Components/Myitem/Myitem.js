import React, { useEffect, useState } from 'react';
import MyItemCard from './MyItemCard';

const Myitem = () => {
    const [myProduct, setmyProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/userproduct')
            .then(res => res.json())
            .then(data => {
                setmyProduct(data)

            })
    }, [])
    return (
        <div className=" grid grid-cols-3 gap-5">
            {
                myProduct.map(myProducts => <MyItemCard
                    key={myProducts._id}
                    myProducts={myProducts}
                    setmyProduct={setmyProduct}
                ></MyItemCard>)
            }

        </div>

    );
};

export default Myitem;