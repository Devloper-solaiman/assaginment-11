import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ItemsCard = ({ products }) => {
    const { user } = useContext(AuthContext)
    const { _id, name, img, price, supliarName, discription } = products

    return (
        <>
            <div className="card w-full h-96  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <img className='h-32 w-32 cursor-pointer' src={img} alt="" />
                    <div className='flex gap-3'>
                        <h5 className=' text-red-500 rounded-lg'>price $ {price}</h5>
                    </div>
                    <h3>supliarName: <small className='text-sky-600 text-xl'>{supliarName}</small> </h3>
                    <p>{discription}</p>
                    {user ? <Link className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                        to={`/chakout/${_id}`} > details </Link> : <Link
                            className="btn btn-sm  text-white lowercase bg-gradient-to-r from-red-500 to-black opacity-40"
                            to={'/login'} > Please Login </Link>}
                </div>
            </div>
        </>
    );
};
export default ItemsCard;