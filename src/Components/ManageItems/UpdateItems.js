import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateItems = () => {
    const loadItems = useLoaderData()
    const [useItems, setUseItems] = useState(loadItems)

    const handleUpdateItem = event => {
        event.preventDefault();
        // console.log(useItems);
        fetch(`http://localhost:5000/userproduct/${useItems._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(useItems)
        })
            .then(res => res.json())
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update'
        })
            .then(data => {
                console.log(data);
                if (data.isConfirmed) {
                    Swal.fire({
                        title: 'update!',
                        text: 'Your file has been Updated.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }
    const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newItems = { ...useItems }
        newItems[field] = value
        setUseItems(newItems);
    }

    return (
        <div className='hero'>
            <form onSubmit={handleUpdateItem}>
                <input onChange={handleInputChange} defaultValue={loadItems.name} className='border font-bold text-2xl rounded-lg my-5 ' type="text" name="name" placeholder='name' required /><br />
                <input onChange={handleInputChange} defaultValue={loadItems.price} className='border font-bold text-2xl rounded-lg ' type="text" name="price" placeholder='price' required /><br />
                <input onChange={handleInputChange} defaultValue={loadItems.quantity} className='border font-bold text-2xl rounded-lg my-5' type="text" name="quantity" placeholder='quantity' required /><br />
                <input onChange={handleInputChange} defaultValue={loadItems.supliarName} className='border font-bold text-2xl rounded-lg ' type="text" name="supliarName" placeholder='supliarName' required /><br />
                <textarea onChange={handleInputChange} className='border opacity-50 w-3/4 rounded-lg focus:opacity-100 font-semibold text-xl my-5' type="text" name="discription" placeholder='discription' required /><br />
                <input className='btn btn-primary ms-10 font-bold text-2xl' type="submit" value='Update user' id="submit" />
            </form>
        </div>
    );
};

export default UpdateItems;