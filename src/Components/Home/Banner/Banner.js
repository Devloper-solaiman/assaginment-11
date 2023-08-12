import React from 'react';
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
            image: 'https://i.ibb.co/gdfPQW1/banner-1.jpg',
            prev: 4,
            id: 1,
            next: 2
        },
        {
            image: 'https://i.ibb.co/Qn7twGR/banner-2.jpg',
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: 'https://i.ibb.co/SsbZL1H/banner-3.webp',
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: 'https://i.ibb.co/smrjWgJ/banner-4.webp',
            prev: 3,
            id: 4,
            next: 1
        },
    ]

    return (
        <div className="carousel w-full h-screen py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;