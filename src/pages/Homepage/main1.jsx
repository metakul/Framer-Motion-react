import React from "react";
import { Grid, Typography, Paper, Container } from "@mui/material";
import { styled } from "@mui/system";

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
          
            <StyledTypography className="mb-6 text-center font-display text-5xl  md:text-left lg:text-5xl xl:text-6xl">
              Buy and Sell Digital Art and NFT’s
            </StyledTypography>
            <StyledTypography className="mb-8 text-center text-lg md:text-left">
              The world's largest digital education marketplace for crypto
              collectibles and non-fungible tokens
            </StyledTypography>
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
    </MainContainer>
  );
};

export default HtmlViewer;
