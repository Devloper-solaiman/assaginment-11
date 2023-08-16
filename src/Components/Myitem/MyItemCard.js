import React from 'react';
import { Link } from 'react-router-dom';

const MyItemCard = ({ myProducts }) => {
    const { _id, name, img, price, supliarName, discription } = myProducts

    return (
        <>
            <div className="card w-full h-full  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <img className='h-32 w-32 cursor-pointer' src={img} alt="" />
                    <div className='flex gap-3'>
                        <h5 className=' text-red-500 rounded-lg'>price $ {price}</h5>
                    </div>
                    <h3>supliarName: <small className='text-sky-600 text-xl'>{supliarName}</small> </h3>
                    <p>{discription}</p>
                    <Link
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                        to={`/mychakout/${_id}`} >details</Link>
                </div>
            </div>
        </>
    );
};

export default MyItemCard;