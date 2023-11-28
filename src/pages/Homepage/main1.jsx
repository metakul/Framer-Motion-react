import React from "react";
import { Grid, Typography, Paper, Container } from "@mui/material";
import { styled } from "@mui/system";
import Info from "./Info"
const MainContainer = styled(Container)({
  marginTop: "2rem",
});



const StyledGrid = styled(Grid)({
  height: "100%",
  gap: "4rem",
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "1rem",
  textAlign: "center",
  borderRadius: "1rem",
  [theme.breakpoints.up("md")]: {
    marginBottom: "1.5rem",
    "&.mb-4": {
      marginBottom: "1rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: "2rem",
    "&.mb-6": {
      marginBottom: "1.5rem",
    },
    "&.mb-8": {
      marginBottom: "2rem",
    },
  },
  "&.dark-bg-white/[.15]": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginBottom: "1.5rem",
    "&.mb-6": {
      marginBottom: "1.5rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: "2rem",
    "&.mb-8": {
      marginBottom: "2rem",
    },
  },
  "&.w-36": {
    width: "9rem",
  },
  "&.rounded-full": {
    borderRadius: "9999px",
  },
  "&.bg-accent": {
    backgroundColor: "#8DD059",
  },
  "&.hover-bg-accent-dark": {
    "&:hover": {
      backgroundColor: "#5C8035",
    },
  },
  "&.shadow-accent-volume": {
    boxShadow: "0 4px 10px rgba(141, 208, 89, 0.2)",
  },
  "&.shadow-white-volume": {
    boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)",
  },
  "&.animate-fly": {
    animation: "$fly 3s infinite",
  },
  "@keyframes fly": {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-1rem)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
}));

const HtmlViewer = () => {
  return (
    <MainContainer>
        <StyledGrid container spacing={3}>
          {/* First Grid Item */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="col-span-6 text-center"
          >
          
          <h1
                class="mb-6 text-center font-display text-5xl  md:text-left lg:text-5xl xl:text-6xl"
              >
               Learn and Earn Rare NFT in Metaverse
              </h1>
              <p class="mb-8 text-center text-lg md:text-left">
              Transform your artistic creations – be it art, music, photos, in-game items, or videos – into NFTs hassle-free with our gasless marketplace.
              </p>
            <div className="flex space-x-8">
              <StyledTypography
                component="a"
                href="create.html"
                className="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover-bg-accent-dark"
              >
                Upload
              </StyledTypography>
              <StyledTypography
                component="a"
                href="collections.html"
                className="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover-bg-accent-dark hover-text-white hover-shadow-accent-volume"
              >
                Explore
              </StyledTypography>
              {/* <StyledTypography
              sx={{
                backgroundColor: "rgb(171 229 255)"
              }}
                component="a"
                href="collections.html"
                className="w-36 rounded-full  py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover-bg-accent-dark hover-text-white hover-shadow-accent-volume"
              >
                Whitepaper
              </StyledTypography> */}
            </div>
            <div className="mb-10 mt-2 w-full sm:flex sm:space-x-4">
              <StyledPaper className="mb-4 flex-1 rounded-2lg dark-bg-white/[.15]">
                <span className="block font-display text-3xl text-[#8DD059]">
                  7,777{" "}
                </span>
                <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                  Metaverse Land
                </span>
              </StyledPaper>
              <StyledPaper className="mb-4 flex-1 rounded-2lg dark-bg-white/[.15]">
                <span className="block font-display text-3xl text-[#737EF2]">
                  777
                </span>
                <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                  NFT's
                </span>
              </StyledPaper>
              <StyledPaper className="mb-4 flex-1 rounded-2lg dark-bg-white/[.15]">
                <span className="block font-display text-3xl text-[#F35BC7]">
                  7M
                </span>
                <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                  $KULL SUPPLY
                </span>
              </StyledPaper>
            </div>
          </Grid>

          {/* Second Grid Item */}
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            className=" flex  py-4 sm:items-start sm:py-8 lg:col-span-5 xl:col-span-5 xl:pl-[20%] xl:pr-[10%]">
            <StyledTypography className="relative text-center sm:pl-8 sm:text-right">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-2 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
              >
                <defs>
                  <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                    <path
                      d="                  M 0, 100
                  C 0, 17.000000000000004 17.000000000000004, 0 100, 0
                  S 200, 17.000000000000004 200, 100
                      183, 200 100, 200
                      0, 183 0, 100       "
                      fill="#9446ED"
                    ></path>
                  </clipPath>
                </defs>
                <g clipPath="url(#clipping)">
                  <image
                    href="img/hero/hero.jpg"
                    width="160"
                    height="160"
                    clip-path="url(#clipping)"
                  />
                </g>
              </svg>
              <img
                src="img/hero/3D_elements.png"
                alt=""
                className="absolute top-10 animate-fly md:-right-[10%]"
              />
            </StyledTypography>
          </Grid>
        </StyledGrid>
        <div class="relative mx-auto mt-4 mb-4">
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
      <Info/>
      <section class="bg-[#010107] py-12 lg:py-24">
        <div
          class="container relative overflow-hidden "
        >
          <div class="mx-auto mb-12 max-w-lg text-center">
          <h1
                class="mb-6 text-center font-display text-5xl  md:text-left lg:text-5xl xl:text-6xl"
              >
               Learn and Earn Rare NFT in Metaverse
              </h1>
              <p class="mb-8 text-center text-lg md:text-left">
              Transform your artistic creations – be it art, music, photos, in-game items, or videos – into NFTs hassle-free with our gasless marketplace.
              </p>
          </div>

            <div class="swiper-wrapper ">
              <div class="mb-4">
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
              <div class="mb-4">
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
                    <h3 class="mb-4 font-display text-lg text-white">Onboard everyone to web3, instantly</h3>
                    <p class="text-jacarta-300">
                    Simplify NFT purchases with fiat checkouts
                    </p>
                  </div>
                </div>
              </div>
             
            
            </div>

          <div class="swiper-pagination-1 mt-10 text-center"></div>
        </div>
      </section>
    </MainContainer>
  );
};

export default HtmlViewer;
