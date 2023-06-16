import React from 'react';
import { Link } from 'react-router-dom';

const AddInventory = ({ quantitys, setDecrease, products }) => {
    const { price, supliarName } = products

    return (
        <div className="card w-full h-96  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{products.name}</h2>
                <img className='h-32 w-32 cursor-pointer' src={products.img} alt="" />
                <div className='flex gap-3'>
                    <h5 className='bg-green-500 text-white rounded-lg'>price $ <small className='bg-teal-500 text-xl '>{price}</small></h5>
                    <h3 className='bg-red-500 text-white rounded-lg'>quantity: <small className='bg-green-500 text-xl'>{quantitys}</small></h3>
                </div>
                <h3>supliarName: <small className='text-sky-600 text-xl'>{supliarName}</small> </h3>
                <p>{products.discription}</p>
                <div className="card-actions justify-end">
                    <div className='cart-button'>
                        <div className="amount-toggle">
                            {quantitys === 0 ?
                                <Link to="/reviews" className='btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary'> update products</Link>
                                :
                                <button onClick={() => setDecrease()}
                                    className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                                >deliverd</button>}
                        </div>
                    </div>
                    <Link className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary" to="/reviews">details</Link>
                </div>
            </div>
        </div>
    );
};

export default AddInventory;