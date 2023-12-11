import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

const NftSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const images = [
    'img/nft-game/nft_game_character_1.png',
    'img/nft-game/nft_game_character_2.png',
    'img/nft-game/nft_game_character_3.png',
    'img/nft-game/nft_game_character_4.png',
    'img/nft-game/nft_game_character_5.png',
  ];

  return (
    <section className="relative pb-6 pt-6 lg:py-12">
      <div className="container">
        <h2 className="mx-auto mb-16 max-w-md text-center font-display text-3xl text-white">
          Collect Them All. Be the True Ownership for Players
        </h2>
      </div>
      <div className=" px-6 pb-16 sm:px-0 w-half mx-auto " style={{maxWidth:"500px"}}>
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
                  <div className="rounded-[1.125rem] bg-jacarta-900 p-8">
                    <figure className="relative my-4 mb-14">
                      <img src={image} alt={`item ${index + 1}`} className="swiper-lazy inline-block" height="212" width="182" />
                      <div className="swiper-lazy-preloader"></div>
                    </figure>
                    <div className="relative rounded-2lg bg-jacarta-700 p-5">
                      <h3 className="mb-3 text-lg font-semibold leading-none text-white">Character {index + 1}</h3>
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
