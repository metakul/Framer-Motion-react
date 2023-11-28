import React, { useState } from 'react';

const HtmlViewer = () => {


  return (
    <div
   
  >
      <section class="relative py-12 lg:py-36">
        <picture
          class="pointer-events-none absolute inset-0 -z-10 after:absolute after:bottom-0 after:h-1/3 after:w-full after:bg-gradient-to-t after:from-[#010107]"
        >
          <img src="img/gradient_creative.jpg" alt="gradient" class="h-full w-full -scale-y-100" />
        </picture>
        <div class="container -mt-20 lg:pb-32">
        
          <p class="mb-20 max-w-4xl text-3xl font-medium text-white lg:ml-36">
            We empower artists, creators, and players to build the platform they always envisioned, providing the means
            to unleash your creativity and earn income.
          </p>
          {/* <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div>
                <span
                  class="text-fill-transparent inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold"
                  >1M+</span
                >
              </div>
              <span class="text-lg text-white">Active Users</span>
            </div>
            <div>
              <div>
                <span
                  class="text-fill-transparent inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold"
                  >$115M</span
                >
              </div>
              <span class="text-lg text-white">Already Earned</span>
            </div>
            <div>
              <div>
                <span
                  class="text-fill-transparent inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold"
                  >4.8</span
                >
              </div>
              <span class="text-lg text-white">Average Ratings</span>
            </div>
            <div>
              <div>
                <span
                  class="text-fill-transparent inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold"
                  >250+</span
                >
              </div>
              <span class="text-lg text-white">NFT Collections</span>
            </div>
          </div> */}
        </div>

        <div class="container pt-32">
          <div class="items-center justify-between lg:flex">
            <div class="relative text-center lg:w-1/2">
              <img src="img/nft-game/gradient_glow_large_1.png" alt="" loading="lazy" class="absolute scale-150" />
              <img src="img/nft-game/robot_large_1.png" alt="" loading="lazy" class="relative -top-10 inline-block" />
              <img src="img/hero/3D_elements.png" alt="" loading="lazy" class="absolute top-10 animate-fly" />
            </div>
            <div class="lg:w-[45%] lg:pl-16">
              <h2 class="mb-6 font-display text-2xl text-white">
                Discover. Collect. Buy Now. Without hassle of Gas Fees
              </h2>
              <p class="mb-8 text-lg leading-normal text-jacarta-200">
                Students moving to web3 are our number-one priority, so we like to take care of them!
              </p>
              <p class="mb-12 text-jacarta-200">
                Every digital creation available through MetakulPlace is an authentic and truly unique digital creation,
                signed and issued by the creator — made possible by blockchain technology. Even if the digital creation
                is copied, it won't be the authentic and originally signed version.
              </p>
              <a
                href="metakul"
                class="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
              >
                Come Discover
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#010107] py-12 lg:pb-32">
        <div class="container">
          <div class="items-center justify-between lg:flex">
            <div class="mb-12 lg:w-[45%] lg:pr-16">
              <h2 class="mb-6 font-display text-2xl text-white">
                Find and Fight rare Creatures and Collect Stunning Pieces
              </h2>
              <p class="mb-8 text-lg leading-normal text-jacarta-200">
                Employees are our number-one priority, so we like to take care of them!
              </p>
              <p class="mb-12 text-jacarta-200">
                Every digital creation available through MakersPlace is an authentic and truly unique digital creation,
                signed and issued by the creator — made possible by blockchain technology. Even if the digital creation
                is copied, it won't be the authentic and originally signed version.
              </p>
              <a
                href="collections.html"
                class="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
              >
                Create Avatar
              </a>
            </div>
            <div class="relative text-center lg:w-1/2">
              <img
                src="img/nft-game/gradient_glow_large_2.png"
                loading="lazy"
                alt=""
                class="pointer-events-none absolute scale-150"
              />


              <img
                src="img/nft-game/crypto_icons_1.png"
                alt=""
                loading="lazy"
                class="pointer-events-none absolute -top-10 z-10 animate-fly"
              />
            </div>
          </div>
        </div>
      </section>
  </div>
  );
};

export default HtmlViewer;
