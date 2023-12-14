import { styled } from "@mui/material/styles";
import {  Paper,  Chip, Button } from "@mui/material";

export const MintButtonContainer = styled("div")`
  button.MuiButton-contained:not(.MuiButton-containedPrimary).Mui-disabled {
    color: #464646;
  }
  button.MuiButton-contained:not(.MuiButton-containedPrimary):hover,
  button.MuiButton-contained:not(.MuiButton-containedPrimary):focus {
    -webkit-animation: pulse 1s;
    animation: pulse 1s;
    box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
  }
  @-webkit-keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 #ef8f6e;
    }
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 #ef8f6e;
    }
  }
`;

export const Card = styled(Paper)`
  display: inline-block;
  background-color: var(--card-background-lighter-color) !important;
  margin: auto;
  padding: 10px;
  margin-left: 5px;
`;

export const Timer = styled("div")`
  font-size: 1em;
  color: white;
  justify-content: center;
  align-items: center;
`;

export const Timer1 = styled("div")`
  font-size: 1.3rem;
  color: white;
  justify-content: center;
  align-items: center;
`;

export const NftBoxGrid = styled("div")`
  font-size: 1.3rem;
  color: white;
  justify-content: center;
  align-items: center;
`;