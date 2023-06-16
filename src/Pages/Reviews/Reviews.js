import React from 'react';
import Navbar from '../Shared/Navbar';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const rating = <>
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-600" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-600" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-600" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-500" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" checked />
    </>
    return (
        <>
            <Navbar></Navbar>
            <div>
                <h1 className='text-6xl text-slate-600 font-bold ms-12 mt-10'>Reviews</h1>
                <h6 className='text-xl text-lime-700 font-bold mt-28 ms-10'>All reviews</h6>
                <div className='h-1 w-28 bg-slate-700 ms-9'></div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Brittany Harkins</h2>
                    <small className='bg-slate-800 w-12 text-slate-400'>verified</small>
                    <small className='text-slate-400'>1 week ago</small>
                    <div className='rating gap-2'> {rating}</div>
                    <h1>5/5</h1>
                    <p>It took me a shift to get used to it. byt now I love it! me way mire organized!</p>
                    <Link className='text-cyan-500 underline-offset-2'>waiter wallet</Link>
                </div>
            </div>
        </>
    );
};

export default Reviews;