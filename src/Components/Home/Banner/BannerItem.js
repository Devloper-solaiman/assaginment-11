import React from 'react';
import './Banner.css'

const BannerItem = ({ slide }) => {
    const { image, prev, id, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item  relative w-full">
            <div className='carousal-img'></div>
            <img src={image} alt='' className="w-full rounded-xl" />
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-5xl font-bold text-white'>
                    Affordable <br />
                    rejonable price for <br />
                    Envantory
                </h1>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/6">
                <p className='text-white '>Inventory is a central management function. It is a cornerstone of supply chain management and logistics in the material management system.</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/6">
                <button className='btn w-32 rounded-sm btn-warning mr-5'>WORNING</button>
                <button className='btn w-32 rounded-sm btn-outline btn-warning'>WORNING</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-1/2 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle btn-primary">❯</a>
            </div>
        </div>
    );
};
export default BannerItem;