import React, { useState } from 'react';
import { useLoaderData, useRevalidator } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyChackout = () => {
    const storeduser = useLoaderData()
    // ..........
    const revalidator = useRevalidator();
    // ..........
    const [users, setUsers] = useState(storeduser)

    console.log(users);

    const handleUpdateUser = event => {
        event.preventDefault();
        fetch(`https://assaginment-11.vercel.app/userproduct/${users._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
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
                if (data.isConfirmed) {
                    revalidator.revalidate()
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
        const newusers = { ...users }
        newusers[field] = value
        setUsers(newusers);
    }

    const handleQuantity = () => {
        users.quantity = parseInt(users.quantity) - 1
        fetch(`https://assaginment-11.vercel.app/userproduct/${users._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
        Swal.fire({
            title: 'Are you sure?',
            text: "are you wont to Deleverd",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Deleverd'
        })
            .then(data => {
                if (data.isConfirmed) {
                    revalidator.revalidate()
                    Swal.fire({
                        title: 'Deleverd!',
                        text: 'Your file has been Deleverd.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className='hero flex'>
            <div className="card w-96 bg-sky-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title ms-20">{storeduser.name}</h2>
                    <img className='h-24 w-24 rounded ms-24' src={storeduser.img} alt="" />
                    <p>{storeduser.discription}</p>
                    <div className='flex font-bold gap-24'>
                        <h4>Price: $ <small className='font-semibold text-lg text-primary'>{storeduser.price}</small></h4>
                        <h4>Quantity:<small className='font-semibold text-lg text-primary'> {storeduser.quantity}</small> </h4>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={handleQuantity} className="btn btn-primary">delivard</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-300 mt-40 shadow-xl ms-44">
                <div className="card-body">
                    <form onSubmit={handleUpdateUser}>
                        <label className='relative'>
                            <span className='absolute bottom-6 left-2 font-bold text-accent'>Name</span>
                            <input onChange={handleInputChange} className='border font-bold opacity-50 focus:opacity-100 text-2xl' defaultValue={storeduser.name} type="text" name="name" placeholder='name' required /><br />
                        </label>
                        <label className='relative'>
                            <span className='absolute bottom-7 left-2 font-bold text-accen'>price</span>
                            <input onChange={handleInputChange} className='border my-5 opacity-50 focus:opacity-100 font-bold text-2xl' defaultValue={storeduser.price} type="text" name="quantity" placeholder='email' required /><br />
                        </label>
                        <label className='relative'>
                            <span className='absolute bottom-7 left-2 font-bold text-accen'>Quantity</span>
                            <input onChange={handleInputChange} className='border opacity-50 focus:opacity-100 font-bold text-2xl' defaultValue={storeduser.quantity} type="text" name="quantity" placeholder='email' required /><br />
                        </label>
                        <input className='btn btn-accent mt-5 ms-16 font-bold text-2xl' type="submit" value='Update user' id="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyChackout;