import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxDotFilled } from 'react-icons/rx';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Banner = () => {
    const slides = [
        { url: 'https://i.ibb.co/gdfPQW1/banner-1.jpg' },
        { url: 'https://i.ibb.co/Qn7twGR/banner-2.jpg' },
        { url: 'https://i.ibb.co/SsbZL1H/banner-3.webp' },
        { url: 'https://i.ibb.co/smrjWgJ/banner-4.webp' }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div>
            <div className=' max-w-[1400px] h-[500px] w-full m-auto py-1 px-4 relative group'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                ></div>

                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className=' absolute top-[60%] -translate-x-0 translate-y-[-50%] lg:left-96 md:left-52 text-2xl rounded-full p-2 text-white cursor-pointer'>
                    <h1 className='uppercase lg:text-6xl md:text-3xl sm:text-sm  lg:text-primary md:text-accent sm:text-primary/80 font-bold'>bhalogary</h1>
                    <h2 className='lg:text-2xl  md:text-xl sm:text-xl ms-12 lg:text-accent md:text-primary sm:text-black/80  uppercase font-bold'>consultancy </h2>
                    <Link to='/blogs' className='btn  lg:btn-netural md:btn-secondary sm:btn-accent ms-16 mt-5'>contuct me</Link>
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;