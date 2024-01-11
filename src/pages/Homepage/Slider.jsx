import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTheme } from '@mui/material';

SwiperCore.use([Navigation, Pagination]);

const NftSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme=useTheme()

  const images = [
    'metakul/nfts/31.png',
    'metakul/nfts/9.png',
    'metakul/nfts/42.png',
    'metakul/nfts/1.png',
    'metakul/nfts/17.png',
  ];

  return (
    <section className="relative pb-6 pt-6 lg:py-12">
      <div className="container">
        <h2 className="mx-auto mb-16 max-w-lg text-center font-display text-3xl ">
          Collect Them All. Be the True Ownership for Players
        </h2>
      </div>
      <div className=" px-6 pb-16 sm:px-0 w-half mx-auto " style={{maxWidth:"600px"}}>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setValue(swiper.activeIndex * 20)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <article className="animate__animated animate__fadeIn">
                <div className="animate-gradient--no-text-fill block animate-gradient overflow-hidden rounded-2.5xl !bg-clip-border p-[2px] text-center shadow-md transition-shadow hover:shadow-lg">
                  <div style={{backgroundColor:theme.palette.colors.colors.primary[900]}} className="rounded-[1.125rem] ">
                    <figure className="relative my-4 mb-14">
                      <img src={image} alt={`item ${index + 1}`} className="swiper-lazy inline-block h-half" height="220" width="320" />
                      <div className="swiper-lazy-preloader"></div>
                    </figure>
                    <div style={{backgroundColor:theme.palette.colors.colors.primary[800], marginLeft:"auto" ,marginRight:"auto", marginBottom:"auto",maxWidth:"320px"}} className="relative rounded-2lg  p-5  ">
                      <h3 className="mb-3 text-lg font-semibold leading-none ">METAKUL {index + 1}</h3>
                      <div className="flex justify-center space-x-5">
                        {/* Add your other content here */}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

     
      </div>
    </section>
  );
};

export default NftSlider;
