import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddItem = () => {
    const [users, setUsers] = useState([])

    const handleAddUser = event => {
        event.preventDefault();
        console.log(users);

        fetch('https://assaginment-11.vercel.app/userproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your data is saved',
                        showConfirmButton: false,
                    })
                    event.target.reset()
                }
                console.log(data)
            })

    }
    const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newusers = { ...users }
        newusers[field] = value
        setUsers(newusers);
    }
    return (
        <div className="card w-96 bg-base-300 mt-4 shadow-xl ms-52">
            <div className="card-body">
                <form onSubmit={handleAddUser}>
                    <label className='relative'>
                        <span className='absolute bottom-7 left-2 font-bold text-accent'>Product Name</span>
                        <input onChange={handleInputChange} className='border font-semibold opacity-50 focus:opacity-100 text-xl' type="text" name="name" placeholder='product name' required /><br />
                    </label>
                    <label className='relative'>
                        <span className='absolute bottom-7 left-2 font-bold text-accent'>Product img URL</span>
                        <input onChange={handleInputChange} className='border mt-7 font-semibold opacity-50 focus:opacity-100 text-xl' type="text" name="img" placeholder='img URL' required /><br />
                    </label>
                    <label className='relative'>
                        <span className='absolute bottom-7 left-2 font-bold text-accent'>price</span>
                        <input onChange={handleInputChange} className='border my-7 opacity-50 focus:opacity-100 font-semibold text-xl' type="text" name="price" placeholder='Price' required /><br />
                    </label>
                    <label className='relative'>
                        <span className='absolute bottom-7 left-2 font-bold text-accent'>Quantity</span>
                        <input onChange={handleInputChange} className='border opacity-50 focus:opacity-100 font-semibold text-xl' type="text" name="quantity" placeholder='Quantity' required /><br />
                    </label>
                    <label className='relative'>
                        <span className='absolute bottom-7 left-2 font-bold text-accent'>supliarName</span>
                        <input onChange={handleInputChange} className='border my-7 opacity-50 focus:opacity-100 font-semibold text-xl' type="text" name="supliarName" placeholder='supliarName' required /><br />
                    </label>
                    <label className='relative'>
                        <span className='absolute bottom-16 left-2 font-bold text-accent'>discription</span>
                        <textarea onChange={handleInputChange} className='border opacity-50 w-3/4 rounded-lg focus:opacity-100 font-semibold text-xl' type="text" name="discription" placeholder='discription' required /><br />
                    </label>
                    <input className='btn btn-accent mt-5 ms-16 font-bold text-2xl' type="submit" value='Update user' id="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;