import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MainPage from "./main1"
import MainPage2 from "./main"
import Partner from './Partner';


const HomePage = () => {
  return (
    <div>
       
      <MainPage2/>
      <Partner/>

      
    </div>
  );
};

export default HomePage;
