import React from 'react';
import Slider from 'react-slick';

const Hero = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeeed: 4000,
        caaEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div>
            <div className='w-full'>
                <Slider {...settings}>
                    <div className='w-full'>
                        <h3>1</h3>
                    </div>
                    <div className='w-full'>
                        <h3>2</h3>
                    </div>
                    <div className='w-full'>
                        <h3>3</h3>
                    </div>
                    <div className='w-full'>
                        <h3>4</h3>
                    </div>
                    <div className='w-full'>
                        <h3>5</h3>
                    </div>
                    <div className='w-full'>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Hero;