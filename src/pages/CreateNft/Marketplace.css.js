import styled from "@mui/system/styled";
import Input from "@mui/material/Input";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export const Header = styled("div")`
display: flex;
`;

// Search Input
export const SearchInput = styled(Input)`
height: 40px;
width: 50%;
border-radius: 15px;
margin: auto auto auto 20px;
padding-left: 15px;
`;

// NFT Input
export const nftInput = styled(Input)`
height: 40px;
width: 80%;
border-radius: 10px;
padding-left: 15px;
border:none;
`;

// Upload Input
export const UploadInput = styled(Input)`
opacity: 0;
position: absolute;
z-index: -1;
`;

// Label for Upload
export const UploadLabel = styled("label")`
cursor: pointer;
height: 250px;
width: 300px;
border-style: dashed;
margin-top: 10px;
border: 2px dashed black;
border-radius: 20px;
padding-top: auto;
padding-right: auto;
`;

// NFT Icon
export const NftIcon = styled("label")`
cursor: pointer;
margin: auto auto auto auto;
`;

// Screen
export const Screen = styled(Container)`
background-image: ${({ image }) => (image ? `url(${image})` : "none")};
background-size: cover;
background-position: center;
width: 100%;
display: flex;
flex-direction: column;
margin: 5px 25px;
`;

// Spacer Components
export const SpacerXSmall = styled("div")`
height: 8px;
width: 8px;
`;

export const SpacerSmall = styled("div")`
height: 16px;
width: 16px;
`;

export const SpacerMedium = styled("div")`
height: 24px;
width: 24px;
`;

export const SpacerLarge = styled("div")`
height: 32px;
width: 32px;
`;

// Container
export const CustomContainer = styled(Container)`
display: flex;
flex-direction: ${({ fd }) => (fd ? fd : "column")};
justify-content: flex-start;
align-items: flex-start;
background-color: pink;
width: 100%;
`;

// Text Components
export const TextTitle = styled(Typography)`
color: var(--primary-text);
font-size: 30px;
font-weight: 1500;
margin-left: 5px;
`;

export const TextSubTitle = styled(Typography)`
color: var(--primary-text);
font-size: 20px;
line-height: 1.6;
margin-top: 8px;
margin-bottom: 0;
font-weight: 1200;
`;

export const TextInfo = styled(Typography)`
color: var(--primary-text);
font-size: 13px;
opacity: 0.5;
margin-top: 4px;
margin-bottom: 6px;
font-weight: 600;

@media (min-width: 1000px) {
  padding-right: 150px;
}
`;

// Responsive Wrapper
export const ResponsiveWrapper = styled("div")`
display: flex;
flex: 1;
flex-direction: column;
justify-content: stretched;
align-items: stretched;
padding: 10px 10% 10px 5%;

@media (min-width: 1000px) {
  flex-direction: column;
  padding: 0px 25% 10px 25%;
}
`;

// Styled Img
export const StyledImg = styled("img")`
width: 250px;
margin: 350px;

@media (min-width: 1000px) {
  width: 330px;
  bottom: 70px;
  border-radius: 330px;
}

transition: width 0.5s;
border-radius: 250px;
`;

// Styled Logo
export const StyledLogo = styled("img")`
width: 60%;

@media (min-width: 1000px) {
  width: 60%;
}

transition: width 0.5s;
transition: height 0.5s;
display: block;
`;

// Styled Link
export const StyledLink = styled("a")`
color: var(--secondary);
text-decoration: none;
`;

// Styled Button
export const StyledButton = styled(Button)`
padding: 4px;
font-size: 17px;
font-weight: bold;
cursor: pointer;
background: linear-gradient(180deg, rgb(148 186 255 / 98%) 0%, rgb(13 142 233 / 96%) 70%)!important;
color: var(--chakra-colors-black);
text-transform: uppercase;
border-radius: 16px;
height: 65px;
margin-top: 30px;
margin-bottom: auto;
width: 200px;
`;


export const s = {
  Screen,
  Header,
  SearchInput,
  nftInput,
  UploadInput,
  StyledButton,
  UploadLabel
};