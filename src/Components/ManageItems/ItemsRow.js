import React from 'react';
import { Link } from 'react-router-dom';

const ItemsRow = ({ ItemsR, handleDelete }) => {
    const { img, name, supliarName, price, quantity, } = ItemsR
    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td className='ps-8'>{quantity}</td>
            <td>{supliarName}</td>

            <th>
                <td><Link to={`/update/${ItemsR._id}`} className='btn  btn-xs btn-success'>Update</Link></td>
            </th>
            <th>
                <button onClick={() => handleDelete(ItemsR)} className="btn  btn-xs btn-warning">Delete</button>
            </th>
        </tr>

    );
};

export default ItemsRow;