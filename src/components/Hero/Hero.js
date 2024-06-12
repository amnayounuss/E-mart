import React from 'react'

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
        <div>
            <Slider>

            </Slider>
        </div>
    </div>
  )
}

export default Hero;