import React from 'react';
import cardImg1 from '../../image/card/display-2.webp'
import cardImg2 from '../../image/card/Headphone-1.webp'
import cardImg3 from '../../image/card/speaker-3.webp'
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div className='grid grid-cols-3 grid-flow-col gap-2 my-20'>
            <div className="card w-96 bg-secondary text-primary-content ">
                <div className="card-body">
                    <h2 className="card-title">OLED TVs</h2>
                    <p>Exclusive offers on TVs until Dec 31. <br />
                        $100 off on every purchase</p>
                    <div className="card-actions static">
                        <button className="btn btn-primary absolute bottom-24 right-48 hover:bg-sky-700 border-none"><Link to="/ledtv">Shop OLED TVs</Link></button>
                    </div>
                    <div className="img-area">
                        <img className=' h-52 w-52 ml-32 rounded-2xl' src={cardImg1} alt="#" />
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <p>Explore our range of high-quality speakers.</p>
                    <div className="card-actions static">
                        <button className="btn btn-secondary absolute bottom-24 right-48 hover:bg-lime-500 border-none"><Link to="/speaker">Shop Speakers</Link></button>
                    </div>
                    <div className="img-area">
                        <img className=' h-52 w-52 ml-32 rounded-2xl' src={cardImg2} alt="#" />
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-neutral text-primary-content">
                <div className="card-body">
                    <p>Discover our new headphones.Up to 25% Off !</p>
                    <div className="card-actions static">
                        <button className="btn btn-primary absolute bottom-24 right-48 hover:bg-sky-700 border-none"><Link to="/headphone">Shop Headphones</Link></button>
                    </div>
                    <div className="img-area">
                        <img className=' h-52 w-52 ml-32 rounded-2xl' src={cardImg3} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;