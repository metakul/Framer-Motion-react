import React, { useState } from 'react';

const HtmlViewer = () => {


  return (
    <div
   
  >
    <main class="overflow-x-hidden">
    <section class="relative pb-6 pt-2 md:pt-2 ">
        <picture class="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <img src="img/gradient.jpg" alt="gradient" class="w-full" />
        </picture>
        <picture class="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <img src="img/gradient_dark.jpg" alt="gradient dark" class="w-full" />
        </picture>

        <div class=" h-full">
          <div class="grid h-full items-center gap-4 lg:grid-cols-12">
          <div
              class="col-span-6 flex h-full flex-col items-center justify-center py-4 md:items-start md:py-8 xl:col-span-5 xl:pl-[20%] xl:pr-[10%]"
            >
              <div class="mb-10 w-full sm:flex sm:space-x-4">
                <div class="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                  <span class="block font-display text-3xl text-[#8DD059]">7,777 </span>
                  <span class="block font-display text-sm text-jacarta-500 dark:text-white">Metaverse Land</span>
                </div>
                <div class="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                  <span class="block font-display text-3xl text-[#737EF2]">777</span>
                  <span class="block font-display text-sm text-jacarta-500 dark:text-white">NFT's</span>
                </div>
                <div class="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                  <span class="block font-display text-3xl text-[#F35BC7]">7M</span>
                  <span class="block font-display text-sm text-jacarta-500 dark:text-white">$KULL SUPPLY</span>
                </div>
              </div>
              <h1
                class="mb-6 text-center font-display text-5xl  md:text-left lg:text-5xl xl:text-6xl"
              >
                Buy and Sell Digital Art and NFT’s
              </h1>
              <p class="mb-8 text-center text-lg md:text-left">
                A gasless NFT marketplace for crypto collectibles and artist
              </p>
              <div class="flex space-x-4">
                <a
                  href="create.html"
                  class="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Upload
                </a>
                <a
                  href="/metakul"
                  class="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                >
                  Explore
                </a>
              </div>
            </div>

            <div               class="col-span-6 flex h-full flex-col items-center justify-center py-4 md:items-start md:py-8 xl:col-span-5 xl:pl-[20%] xl:pr-[10%]"
>
              <div class="relative text-center md:pl-8 md:text-right">
                <svg
                  viewbox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mt-2 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
                >
                  <defs>
                    <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                      <path
                        d="
                    M 0, 100
                    C 0, 17.000000000000004 17.000000000000004, 0 100, 0
                    S 200, 17.000000000000004 200, 100
                        183, 200 100, 200
                        0, 183 0, 100
                "
                        fill="#9446ED"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clipping)">
                    <image href="img/hero/hero.jpg" width="200" height="200" clip-path="url(#clipping)" />
                  </g>
                </svg>
                <img src="img/hero/3D_elements.png" alt="" class="absolute top-0 animate-fly md:-right-[10%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="relative mx-auto mt-8">
        <img src="img/nft-game/crypto_icons.png" class="pointer-events-none absolute -top-1/4 animate-fly" alt="" />
        <div class="container" style={{maxWidth:"600px"}} >
          <figure class="relative overflow-hidden rounded-3xl before:absolute before:inset-0 before:bg-jacarta-900/25">
            <img src="img/nft-game/nft_game_video_poster.jpg"  alt="video" />
            <a
              href="https://www.youtube.com/embed/dQw4w9WgXcQ"
              data-bs-toggle="modal"
              data-bs-target=".video-lightbox"
              class="js-video-modal-trigger absolute top-1/2 left-1/2 flex h-24 w-24 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white transition-transform will-change-transform hover:scale-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="h-rotate h-8 w-8 fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
                ></path>
              </svg>
            </a>
          </figure>
        </div>
      </div>

   

  
  
      <section class="bg-[#010107] py-12 lg:py-24">
        <div
          class="container relative overflow-hidden xl:left-[calc((100vw-1202px)/4)] xl:max-w-[calc(1202px+((100vw-1202px)/2))] xl:pr-[calc((100vw-1176px)/2)]"
        >
          <div class="mx-auto mb-12 max-w-lg text-center">
            <h2 class="mb-6 text-center font-display text-3xl font-medium text-white md:text-5xl">
              Fabulous Things To Enjoy
            </h2>
            <p class="text-lg text-jacarta-300">
              Minting free nfts without paying gas  fees
            </p>
          </div>

          <div class="swiper card-slider-3-columns-large-gap xl:!overflow-visible">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="rounded-2.5xl bg-jacarta-800 p-10">
                  <div class="mb-4 md:mb-0">
                    <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8">
                      <g clip-path="url(#clip0_1648_19589)">
                        <path
                          d="M18.66 23H23a9 9 0 019 9H17.998L18 34h16v-2a11.156 11.156 0 00-1.772-6H38a10 10 0 019.032 5.702C42.302 37.944 34.644 42 26 42c-5.522 0-10.2-1.18-14-3.25V20.142A13.935 13.935 0 0118.66 23zM8 18a2 2 0 011.986 1.766L10 20v18a2 2 0 01-2 2H4a2 2 0 01-2-2V20a2 2 0 012-2h4zM27.292 7.15l.708.71.708-.708a5 5 0 117.07 7.072L28 22l-7.78-7.78a5 5 0 117.072-7.07z"
                          fill="url(#paint0_linear_1648_19589)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1648_19589"
                          x1="24.516"
                          y1="5.669"
                          x2="24.516"
                          y2="42"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#8358FF" />
                          <stop offset="1" stop-color="#FD9BFF" />
                        </linearGradient>
                        <clipPath id="clip0_1648_19589"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath>
                      </defs>
                    </svg>
                    <h3 class="mb-4 font-display text-lg text-white">Thirdweb ERC4337 based wallet</h3>
                    <p class="text-jacarta-300">
                    Onboard users with wallets, build & deploy smart contracts, accept fiat with payments, and scale apps with infrastructure — on any EVM chain.
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="rounded-2.5xl bg-jacarta-800 p-10">
                  <div class="mb-4 md:mb-0">
                    <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8">
                      <g clip-path="url(#clip0_1766_5774)">
                        <path
                          d="M20 39.496V32.8c0-2.566 1.99-4.584 4.934-5.736A16.963 16.963 0 0019 26c-3.78 0-7.272 1.234-10.094 3.32A16.033 16.033 0 0020 39.496zm17.76-7.324C36.97 31.106 34.34 30 31 30c-4.012 0-7 1.594-7 2.8V40a15.993 15.993 0 0013.76-7.828zM19.1 23a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM31 25a4 4 0 100-8 4 4 0 000 8zm-7 19C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20z"
                          fill="url(#paint0_linear_1766_5774)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1766_5774"
                          x1="24"
                          y1="4"
                          x2="24"
                          y2="44"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#8358FF" />
                          <stop offset="1" stop-color="#FD9BFF" />
                        </linearGradient>
                        <clipPath id="clip0_1766_5774"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath>
                      </defs>
                    </svg>
                    <h3 class="mb-4 font-display text-lg text-white">Build a driven community</h3>
                    <p class="text-jacarta-300">
                      With millions in transactions since 2017, we’ll help you generate revenue on our platform ⁠— from
                      direct sales to secondary sales
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="rounded-2.5xl bg-jacarta-800 p-10">
                  <div class="mb-4 md:mb-0">
                    <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8">
                      <g clip-path="url(#clip0_1766_5788)">
                        <path
                          d="M22 4c8.136 0 14.852 6.072 15.868 13.93l4.5 7.078c.296.466.236 1.16-.45 1.456L38 28.14V34c0 2.21-1.79 4-4 4h-3.998L30 44H12v-7.388c0-2.36-.872-4.594-2.488-6.61A15.929 15.929 0 016 20c0-8.836 7.164-16 16-16zm-1.06 11.526a3.498 3.498 0 00-4.95 0 3.496 3.496 0 000 4.948L22 26.486l6.01-6.012a3.496 3.496 0 000-4.948 3.498 3.498 0 00-4.95 0L22 16.586l-1.06-1.06z"
                          fill="url(#paint0_linear_1766_5788)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1766_5788"
                          x1="24.268"
                          y1="4"
                          x2="24.268"
                          y2="44"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#8358FF" />
                          <stop offset="1" stop-color="#FD9BFF" />
                        </linearGradient>
                        <clipPath id="clip0_1766_5788"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath>
                      </defs>
                    </svg>
                    <h3 class="mb-4 font-display text-lg text-white">Create awareness & knowledge</h3>
                    <p class="text-jacarta-300">
                      With millions in transactions since 2017, we’ll help you generate revenue on our platform ⁠— from
                      direct sales to secondary sales
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="rounded-2.5xl bg-jacarta-800 p-10">
                  <div class="mb-4 md:mb-0">
                    <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8">
                      <g clip-path="url(#clip0_1766_5760)">
                        <path
                          d="M36 16h4a2 2 0 012 2v24a2 2 0 01-2 2H8a2 2 0 01-2-2V18a2 2 0 012-2h4v-2a12 12 0 0124 0v2zM22 31.464V36h4v-4.536a4 4 0 10-4 0zM32 16v-2a8 8 0 00-16 0v2h16z"
                          fill="url(#paint0_linear_1766_5760)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1766_5760"
                          x1="24"
                          y1="2"
                          x2="24"
                          y2="44"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#8358FF" />
                          <stop offset="1" stop-color="#FD9BFF" />
                        </linearGradient>
                        <clipPath id="clip0_1766_5760"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath>
                      </defs>
                    </svg>
                    <h3 class="mb-4 font-display text-lg text-white">Enhancing global security</h3>
                    <p class="text-jacarta-300">
                      With millions in transactions since 2017, we’ll help you generate revenue on our platform ⁠— from
                      direct sales to secondary sales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-pagination-1 mt-10 text-center"></div>
        </div>
      </section>

      <section
        class="relative bg-cover bg-center bg-no-repeat py-32 after:absolute after:inset-0 after:bg-[#000000]/50"
       
      >
        <div class="container relative z-10">
          <h2 class="mx-auto mb-6 max-w-lg text-center font-display text-2xl text-white">
            Ready to be a Part of Our Journey? Make the Most of Your World
          </h2>

          <p class="mx-auto max-w-md text-center text-lg text-white">
            Be part of our amazing community and development updates, giveaways, events. Stay tuned for the news.more!
          </p>

          <div class="mx-auto mt-10 max-w-md text-center">
            <form class="relative">
              <input
                type="email"
                placeholder="Email address"
                class="w-full rounded-full border border-jacarta-600 bg-jacarta-700 py-3 px-4 text-white placeholder-white focus:ring-accent"
              />
              <button
                class="absolute top-2 right-2 rounded-full bg-accent px-6 py-2 font-display text-sm text-white hover:bg-accent-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <div class="bg-jacarta-800">
        <div class="container">
          <div class="grid grid-cols-2 py-8 sm:grid-cols-5">
            <a href="#"><img src="img/partners/partner_logo_1.png" alt="partner 1" /> </a>
            <a href="#"><img src="img/partners/partner_logo_2.png" alt="partner 1" /> </a>
            <a href="#"><img src="img/partners/partner_logo_3.png" alt="partner 1" /> </a>
            <a href="#"><img src="img/partners/partner_logo_4.png" alt="partner 1" /> </a>
            <a href="#"><img src="img/partners/partner_logo_5.png" alt="partner 1" /> </a>
          </div>
        </div>
      </div>
    </main>

    <div
      class="modal fade video-lightbox js-video-lightbox"
      tabindex="-1"
      aria-label="Youtube Modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="h-6 w-6 fill-jacarta-700"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                />
              </svg>
            </button>
            <div class="ratio ratio-16x9 before:bg-jacarta-900">
              <iframe class="embed-responsive-item" src="" allow="autoplay"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>



 


    <script src="../js/app.bundle.js"></script>
    <script src="../js/videoLightbox.bundle.js"></script>
  </div>
  );
};

export default HtmlViewer;
