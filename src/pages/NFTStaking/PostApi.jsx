import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
} from '@mui/material';
import { getMyNFT } from './getApi'; // Assuming you have a function to get a specific NFT

const GetMyNFT = () => {
  const [selectedNFT, setSelectedNFT] = useState(null);

  useEffect(() => {
    // Assuming you have a function to get a specific NFT by its ID
    getMyNFT('yourNFTId')
      .then((response) => {
        // Set the selected NFT in the state
        setSelectedNFT(response.data);
      })
      .catch((error) => {
        console.error('Error fetching NFT:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h5">Get My NFT</Typography>
      {selectedNFT ? (
        <div>
          {/* Render the details of the selected NFT here */}
          <Typography variant="h6">{selectedNFT.metadata.name}</Typography>
          {/* Additional NFT details can be rendered here */}
        </div>
      ) : (
        <Typography>No NFT found</Typography>
      )}
      <Button variant="contained" color="primary" onClick={() => window.history.back()}>
        Go Back
      </Button>
    </Container>
  );
};

export default GetMyNFT;
