import React, { useState } from 'react';
import AddInventory from './AddInventory';

const InventoryService = ({ products }) => {
    const [quantitys, setQuantitys] = useState(products.quantity)
    const setDecrease = () => {
        quantitys > 1 ? setQuantitys(quantitys - 1) : setQuantitys(0)
    }


    return (
        <>
            <AddInventory
                quantitys={quantitys}
                setDecrease={setDecrease}
                products={products}
            ></AddInventory >



        </>
    );
};

export default InventoryService;